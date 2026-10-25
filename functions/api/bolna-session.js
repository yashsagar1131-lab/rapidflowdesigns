// Cloudflare Pages Function: POST /api/bolna-session
//
// Mints a short-lived, single-use Bolna web-call session for the live demo on the
// homepage. The Bolna API key stays here on the server; the browser never sees it.
//
// Required (Cloudflare Pages > Settings > Variables and Secrets, Production):
//   BOLNA_API_KEY   secret, the "bn-..." key from the Bolna dashboard
// Optional:
//   BOLNA_AGENT_ID  defaults to the EMI reminder demo agent below

const DEFAULT_AGENT_ID = "da3fddf9-38c7-4540-84ac-6efde034c29f"; // multilingual EMI reminder demo

// Languages the visitor can pick. Keys must match the languages configured on the
// Bolna agent. The opening line is fixed here (not taken from the browser), so
// visitors can only choose from this list and cannot change what the agent says.
const GREETINGS = {
  en: "Hello, I'm the automated assistant from Demo Finance. This call is being recorded. Am I speaking with Ramesh Kumar?",
  hi: "नमस्ते, मैं डेमो फ़ाइनेंस की ऑटोमेटेड असिस्टेंट बोल रही हूँ। यह कॉल रिकॉर्ड हो रही है। क्या मेरी बात रमेश कुमार जी से हो रही है?",
  pa: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ ਡੈਮੋ ਫਾਈਨੈਂਸ ਦੀ ਆਟੋਮੇਟਿਡ ਅਸਿਸਟੈਂਟ ਬੋਲ ਰਹੀ ਹਾਂ। ਇਹ ਕਾਲ ਰਿਕਾਰਡ ਹੋ ਰਹੀ ਹੈ। ਕੀ ਮੇਰੀ ਗੱਲ ਰਮੇਸ਼ ਕੁਮਾਰ ਜੀ ਨਾਲ ਹੋ ਰਹੀ ਹੈ?",
  gu: "નમસ્તે, હું ડેમો ફાઇનાન્સની ઓટોમેટેડ આસિસ્ટન્ટ બોલી રહી છું. આ કૉલ રેકોર્ડ થઈ રહ્યો છે. શું મારી વાત રમેશ કુમાર સાથે થઈ રહી છે?",
  mr: "नमस्कार, मी डेमो फायनान्सची ऑटोमेटेड असिस्टंट बोलत आहे. हा कॉल रेकॉर्ड होत आहे. मी रमेश कुमार यांच्याशी बोलत आहे का?",
  bn: "নমস্কার, আমি ডেমো ফাইনান্সের অটোমেটেড অ্যাসিস্ট্যান্ট বলছি। এই কলটি রেকর্ড করা হচ্ছে। আমি কি রমেশ কুমারের সঙ্গে কথা বলছি?",
  ta: "வணக்கம், நான் டெமோ ஃபைனான்ஸின் தானியங்கி உதவியாளர் பேசுகிறேன். இந்த அழைப்பு பதிவு செய்யப்படுகிறது. நான் ரமேஷ் குமாருடன் பேசுகிறேனா?",
  te: "నమస్కారం, నేను డెమో ఫైనాన్స్ ఆటోమేటెడ్ అసిస్టెంట్‌ను మాట్లాడుతున్నాను. ఈ కాల్ రికార్డ్ అవుతోంది. నేను రమేష్ కుమార్ గారితో మాట్లాడుతున్నానా?",
  kn: "ನಮಸ್ಕಾರ, ನಾನು ಡೆಮೊ ಫೈನಾನ್ಸ್‌ನ ಆಟೋಮೇಟೆಡ್ ಅಸಿಸ್ಟೆಂಟ್ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆ. ಈ ಕರೆಯನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ. ನಾನು ರಮೇಶ್ ಕುಮಾರ್ ಅವರೊಂದಿಗೆ ಮಾತನಾಡುತ್ತಿದ್ದೇನೆಯೇ?",
  ml: "നമസ്കാരം, ഞാൻ ഡെമോ ഫിനാൻസിന്റെ ഓട്ടോമേറ്റഡ് അസിസ്റ്റന്റാണ് സംസാരിക്കുന്നത്. ഈ കോൾ റെക്കോർഡ് ചെയ്യപ്പെടുന്നുണ്ട്. ഞാൻ രമേഷ് കുമാറിനോടാണോ സംസാരിക്കുന്നത്?",
};
const DEFAULT_LANGUAGE = "hi";
const ALLOWED_ORIGINS = [
  "https://rapidflowdesigns.com",
  "https://www.rapidflowdesigns.com",
];
const PREVIEW_HOST = /^https:\/\/[a-z0-9-]+\.rapidflowdesigns\.pages\.dev$/;
const COOLDOWN_SECONDS = 5; // per visitor, per Cloudflare location (best effort)

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

  // The page sends { user_data: { language: "pa" } }; anything not on the list falls back to Hindi.
  let body = {};
  try { body = await request.json(); } catch (e) {}
  const asked = String((body && body.user_data && body.user_data.language) || "").toLowerCase();
  const language = Object.prototype.hasOwnProperty.call(GREETINGS, asked) ? asked : DEFAULT_LANGUAGE;

  const upstream = await fetch("https://api.bolna.ai/web-call/session", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.BOLNA_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: env.BOLNA_AGENT_ID || DEFAULT_AGENT_ID,
      agent_data: { language },
      user_data: { greeting: GREETINGS[language] },
    }),
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export const onRequest = () => json({ error: "method_not_allowed" }, 405);
