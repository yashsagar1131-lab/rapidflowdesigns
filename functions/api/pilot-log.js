// Cloudflare Pages Function: POST /api/pilot-log
//
// Copies a pilot-request form submission into a Google Sheet, through the Apps Script
// web app in apps-script/pilot-sheet.gs. The email from Web3Forms stays the primary
// notification; this is a second, silent record. The Apps Script URL and the shared
// secret stay here on the server; the browser never sees them.
//
// Required (Cloudflare Pages > Settings > Variables and Secrets, Production):
//   PILOT_SHEET_URL     the Apps Script web app URL ending in /exec
//   PILOT_SHEET_SECRET  the same value as SECRET in the Apps Script (a secret)

const ALLOWED_ORIGINS = [
  "https://rapidflowdesigns.com",
  "https://www.rapidflowdesigns.com",
];
const PREVIEW_HOST = /^https:\/\/[a-z0-9-]+\.rapidflowdesigns\.pages\.dev$/;
const COOLDOWN_SECONDS = 10; // per visitor, per Cloudflare location (best effort)
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const clean = (v) => String(v == null ? "" : v).trim().slice(0, 200);

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin) && !PREVIEW_HOST.test(origin)) {
    return json({ error: "forbidden" }, 403);
  }
  if (!env.PILOT_SHEET_URL || !env.PILOT_SHEET_SECRET) {
    return json({ error: "not_configured" }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: "bad_request" }, 400);
  }
  const rec = {
    name: clean(body.name),
    email: clean(body.email),
    company: clean(body.company),
    phone: clean(body.phone),
    language: clean(body.language),
  };
  if (!rec.name || !rec.company || !EMAIL.test(rec.email)) {
    return json({ error: "bad_request" }, 400);
  }

  // Best-effort throttle so one visitor cannot flood the sheet.
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const key = new Request(`https://throttle.invalid/pilot-log/${encodeURIComponent(ip)}`);
  const cache = caches.default;
  if (await cache.match(key)) {
    return json({ error: "slow_down" }, 429);
  }
  await cache.put(
    key,
    new Response("1", { headers: { "Cache-Control": `max-age=${COOLDOWN_SECONDS}` } })
  );

  const upstream = await fetch(env.PILOT_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ secret: env.PILOT_SHEET_SECRET, ...rec }),
  });
  return json({ ok: upstream.ok }, upstream.ok ? 200 : 502);
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
