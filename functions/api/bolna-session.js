// Cloudflare Pages Function: POST /api/bolna-session
//
// Mints a short-lived, single-use Bolna web-call session for the live demo on the
// homepage. The Bolna API key stays here on the server; the browser never sees it.
//
// Required (Cloudflare Pages > Settings > Variables and Secrets, Production):
//   BOLNA_API_KEY   secret, the "bn-..." key from the Bolna dashboard
// Optional:
//   BOLNA_AGENT_ID  defaults to the EMI reminder demo agent below

const DEFAULT_AGENT_ID = "1ec8760b-ae0c-4cee-91cb-d7eada7b04d9";
const ALLOWED_ORIGINS = [
  "https://rapidflowdesigns.com",
  "https://www.rapidflowdesigns.com",
];
const PREVIEW_HOST = /^https:\/\/[a-z0-9-]+\.rapidflowdesigns\.pages\.dev$/;
const COOLDOWN_SECONDS = 20; // per visitor, per Cloudflare location (best effort)

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin) && !PREVIEW_HOST.test(origin)) {
    return json({ error: "forbidden" }, 403);
  }
  if (!env.BOLNA_API_KEY) {
    return json({ error: "not_configured" }, 503);
  }

  // Best-effort throttle: one new call per visitor every few seconds.
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const key = new Request(`https://throttle.invalid/${encodeURIComponent(ip)}`);
  const cache = caches.default;
  if (await cache.match(key)) {
    return json({ error: "slow_down" }, 429);
  }
  await cache.put(
    key,
    new Response("1", { headers: { "Cache-Control": `max-age=${COOLDOWN_SECONDS}` } })
  );

  const upstream = await fetch("https://api.bolna.ai/web-call/session", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.BOLNA_API_KEY}`,
      "Content-Type": "application/json",
    },
    // No user_data is forwarded: visitors cannot change what the agent says.
    body: JSON.stringify({ agent_id: env.BOLNA_AGENT_ID || DEFAULT_AGENT_ID }),
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
