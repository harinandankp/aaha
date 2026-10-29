import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getProduct, localizedSections, type Lang } from "@/lib/products";

export const Route = createFileRoute("/p/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} – Audio guide` : "Product – TouchTalk" },
      { name: "description", content: "Spoken product information in English and Malayalam for visually impaired consumers." },
      { property: "og:title", content: loaderData?.name ?? "TouchTalk product" },
      { property: "og:description", content: "Tap to hear dates, dosage, storage and safety warnings." },
    ],
  }),
  component: ProductPage,
});

const speechLang: Record<Lang, string> = { en: "en-IN", ml: "ml-IN" };

function speak(text: string, lang: Lang, onEnd?: () => void) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = speechLang[lang];
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith(lang));
  if (voice) u.voice = voice;
  u.rate = 0.9;
  u.onend = () => onEnd?.();
  synth.speak(u);
}

const ui = {
  en: { back: "← All packages", play: "▶ Play all", stop: "■ Stop", speaking: "Speaking…", hint: "Tap a section to hear it." },
  ml: { back: "← എല്ലാ പാക്കേജുകളും", play: "▶ എല്ലാം കേൾക്കുക", stop: "■ നിർത്തുക", speaking: "വായിക്കുന്നു…", hint: "കേൾക്കാൻ ഒരു ഭാഗം തൊടുക." },
};

function ProductPage() {
  const p = Route.useLoaderData();
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState<string | null>(null);
  const [noMlVoice, setNoMlVoice] = useState(false);
  const list = localizedSections(p, lang);
  const all = list.map((s) => `${s.label}. ${s.text}`).join(" ");
  const t = ui[lang];

  useEffect(() => {
    const saved = localStorage.getItem("tt-lang");
    if (saved === "ml" || saved === "en") setLang(saved);
    const check = () => {
      const v = window.speechSynthesis?.getVoices() ?? [];
      setNoMlVoice(v.length > 0 && !v.some((x) => x.lang.toLowerCase().startsWith("ml")));
    };
    check();
    window.speechSynthesis?.addEventListener?.("voiceschanged", check);
    return () => window.speechSynthesis?.removeEventListener?.("voiceschanged", check);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => { setActive("all"); speak(all, lang, () => setActive(null)); }, 600);
    return () => { clearTimeout(timer); window.speechSynthesis?.cancel(); };
  }, [all, lang]);

  const choose = (l: Lang) => { setLang(l); localStorage.setItem("tt-lang", l); };
  const play = (key: string, text: string) => { setActive(key); speak(text, lang, () => setActive(null)); };
  const stop = () => { window.speechSynthesis?.cancel(); setActive(null); };

  return (
    <main className="mx-auto max-w-3xl px-5 py-10" lang={lang}>
      <Link to="/" className="text-primary underline">{t.back}</Link>

      <div role="group" aria-label="Language / ഭാഷ" className="mt-6 grid grid-cols-2 gap-3">
        {(["en", "ml"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => choose(l)}
            aria-pressed={lang === l}
            className={`rounded-2xl border-2 py-3 text-xl font-bold ${lang === l ? "border-primary bg-muted" : "border-border"}`}
          >
            {l === "en" ? "English" : "മലയാളം"}
          </button>
        ))}
      </div>
      {lang === "ml" && noMlVoice && (
        <p className="mt-3 text-muted-foreground">
          This device has no Malayalam voice. Install "Malayalam" in your phone's text-to-speech settings (Google Speech Services).
        </p>
      )}

      <p className="mt-6 text-muted-foreground">{p.category}</p>
      <h1 className="text-3xl md:text-5xl font-bold">{list[0]?.text ?? p.name}</h1>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button onClick={() => play("all", all)} className="rounded-2xl bg-primary py-6 text-2xl font-bold text-primary-foreground">{t.play}</button>
        <button onClick={stop} className="rounded-2xl border-2 border-border py-6 text-2xl font-bold">{t.stop}</button>
      </div>
      <p aria-live="polite" className="mt-3 text-muted-foreground">{active ? t.speaking : t.hint}</p>

      <ul className="mt-6 space-y-3">
        {list.map((s) => (
          <li key={s.key}>
            <button
              onClick={() => play(s.key, `${s.label}. ${s.text}`)}
              className={`w-full text-left rounded-2xl border-2 bg-card p-5 ${active === s.key ? "border-primary" : "border-border"}`}
            >
              <span className="block text-primary font-bold uppercase tracking-wide">{s.label}</span>
              <span className="mt-1 block text-lg">{s.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
