// Header.jsx
import React from "react";
import { FiClock, FiGlobe, FiPhone } from "react-icons/fi";
import AnimatedContent from "../ReactBits/AnimatedContent";
import image from "../../assets/image.png";

export default function Header({ site, lang, setLang, t, loading, error }) {
  const heroBg =
    image;

  // config
  const phone = site?.site?.phone || "33 195 15 05";
  const workHours =
    t?.workHoursText || site?.site?.workHours || "Пн. – Сб.: 9:00 – 18:00";


  // ✅ тексты из DB i18n
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
        className={`font-semibold transition ${active ? "text-red-500" : "text-white/70 hover:text-white"
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

      {/* HEADER FIXED */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-xl shadow-black/80">
        <div className="bg-neutral-900/70 backdrop-blur-xl border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex items-center justify-between py-3 md:py-4 gap-4">
              {/* Logo + subtitle */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black">
                    E
                  </div>
                  <span className="text-xl md:text-2xl font-black tracking-wide">
                    EVEN
                  </span>
                </div>

                {/* subtitle only on md+ */}
                <div className="hidden md:block text-sm text-white/70 leading-tight whitespace-pre-line truncate">
                  {headerSubtitle}
                </div>
              </div>

              {/* DESKTOP RIGHT INFO (lg+) */}
              <div className="hidden lg:flex items-center gap-8 text-sm shrink-0">
                <div className="flex items-center gap-2 text-white/80">
                  <FiClock className="text-red-500" />
                  <span className="whitespace-nowrap">{workHours}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-red-500" />
                  <div className="text-white/70">{callLabel}</div>
                  <a
                    href={`tel:${String(phone).replace(/\s/g, "")}`}
                    className="text-red-500 font-extrabold tracking-wide hover:text-red-400 transition whitespace-nowrap"
                  >
                    {phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <FiGlobe className="text-white/70" />
                  <LangBtn code="uz" label="O'z" />
                  <span className="text-white/40">|</span>
                  <LangBtn code="ru" label="Ru" />
                </div>
              </div>

              {/* MOBILE RIGHT */}
              <div className="lg:hidden flex items-center gap-3 shrink-0">
                <a
                  href={`tel:${String(phone).replace(/\s/g, "")}`}
                  className="btn btn-ghost btn-sm px-2 text-red-500"
                  aria-label="Call"
                  title={phone}
                >
                  <FiPhone />
                </a>

                <div className="flex items-center gap-2 text-xs">
                  <FiGlobe className="text-white/70" />
                  <LangBtn code="uz" label="O'z" />
                  <span className="text-white/40">|</span>
                  <LangBtn code="ru" label="Ru" />
                </div>
              </div>
            </div>

            {/* MOBILE SUBTITLE ROW */}
            <div className="md:hidden pb-3">
              <div className="text-xs text-white/70 leading-snug whitespace-pre-line">
                {headerSubtitle}
              </div>

              <div className="mt-2 text-xs text-white/70">
                {callLabel}{" "}
                <a
                  href={`tel:${String(phone).replace(/\s/g, "")}`}
                  className="text-red-500 font-extrabold"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* content padding for fixed header */}
      <div className="relative z-10 pt-[96px] md:pt-[76px]">
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
              {loading
                ? loadingText
                : error
                  ? `${errorText}: ${error}`
                  : t?.topTag}
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
                <a href="#order" className="flex items-center gap-2">
                  {t?.cta || ""}
                  <span className="ml-2">→</span>
                </a>
              </button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
