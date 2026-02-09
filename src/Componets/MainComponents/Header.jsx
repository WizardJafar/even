import React from "react";
import { FiClock, FiGlobe, FiPhone } from "react-icons/fi";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function Header({ site, lang, setLang, t, loading, error }) {
  const heroBg =
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=80";

  // ✅ у тебя данные лежат в site.site.*
  const phone = site?.site?.phone || "78 122 15 05";
  const workHours = site?.site?.workHours || "Пн. – Сб.: 9:00 – 18:00";

  // ✅ чтобы перевод в хедере работал, бери тексты из t (из DB)
  // добавь эти ключи в i18n:
  // ru: headerSubtitle, callLabel, loadingText, errorText
  // uz: headerSubtitle, callLabel, loadingText, errorText
  const headerSubtitle =
    t?.headerSubtitle || "Услуги внутренней и наружной\nрекламы с 2018 - года";
  const callLabel = t?.callLabel || "Звоните по номеру";
  const loadingText = t?.loadingText || "Загрузка...";
  const errorText = t?.errorText || "Ошибка";

  const LangBtn = ({ code, label }) => {
    const active = lang === code;
    return (
      <button
        type="button"
        onClick={() => setLang(code)}
        className={`font-semibold transition ${
          active ? "text-red-500" : "text-white/70 hover:text-white"
        }`}
        aria-pressed={active}
      >
        {label}
      </button>
    );
  };

  return (
    <section className="relative min-h-[92vh] bg-neutral-950 text-white overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(1200px 500px at 35% 40%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* ✅ HEADER FIXED */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-neutral-900/70 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between py-4 gap-6">
              {/* Logo + text */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black">
                    E
                  </div>
                  <span className="text-xl md:text-2xl font-black tracking-wide">
                    EVEN
                  </span>
                </div>

                <div className="hidden md:block text-sm text-white/70 leading-tight whitespace-pre-line">
                  {headerSubtitle}
                </div>
              </div>

              {/* Right info */}
              <div className="hidden lg:flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <FiClock className="text-red-500" />
                  <span>{workHours}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-red-500" />
                  <div className="text-white/70">{callLabel}</div>
                  <a
                    href={`tel:${String(phone).replace(/\s/g, "")}`}
                    className="text-red-500 font-extrabold tracking-wide hover:text-red-400 transition"
                  >
                    {phone}
                  </a>
                </div>

                {/* ✅ Lang switch: active = red */}
                <div className="flex items-center gap-2">
                  <FiGlobe className="text-white/70" />
                  <LangBtn code="uz" label="O'z" />
                  <span className="text-white/40">|</span>
                  <LangBtn code="ru" label="Ru" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ add top padding because header is fixed */}
      <div className="relative z-10 pt-[76px]">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8 pt-14 md:pt-20 pb-14 flex flex-col text-start">
            <div className="text-white/80 text-sm md:text-base mb-6">
              {loading ? loadingText : error ? `${errorText}: ${error}` : t?.topTag}
            </div>

            <h1 className="font-black uppercase leading-[0.95] tracking-tight">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                {t?.h1a || ""}
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                {t?.h1b || ""}
              </span>
            </h1>

            <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
              {t?.h2 || ""}
            </p>

            <div className="mt-7 max-w-xl">
              <div className="flex gap-4">
                <div className="w-1 bg-red-600" />
                <div>
                  <div className="text-red-500 font-extrabold uppercase">
                    {t?.badgeTitle || ""}
                  </div>
                  <div className="mt-2 text-white/75 whitespace-pre-line">
                    {t?.badgeText || ""}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="btn btn-outline border-red-600 text-white hover:bg-red-600 hover:border-red-600 rounded-none px-8">
                {t?.cta || ""}
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
