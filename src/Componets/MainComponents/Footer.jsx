// Footer.jsx
import React from "react";
import { FiClock, FiPhone, FiGlobe } from "react-icons/fi";

export default function Footer({
  phone = "33 195 15 05",
  workHours = "Пн. – Сб.: 9:00 – 18:00",
  callLabel = "Звоните:",
  LangBtn,
  subtitle = "Рекламные услуги",
}) {
  const tel = `tel:${String(phone).replace(/\s/g, "")}`;

  return (
    <footer className=" bg-neutral-800 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-5">
        <div className="flex items-center justify-between gap-3">
          {/* LEFT: logo */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black text-white shrink-0">
              E
            </div>

            <div className="min-w-0">
              <div className="text-white font-black tracking-wide text-lg leading-none">
                EVEN
              </div>
              <div className="text-xs text-white/50 truncate">{subtitle}</div>
            </div>
          </div>

          {/* RIGHT DESKTOP (lg+) */}
          <div className="hidden lg:flex items-center gap-8 text-sm shrink-0">
            <div className="flex items-center gap-2 text-white/80">
              <FiClock className="text-red-500" />
              <span className="whitespace-nowrap">{workHours}</span>
            </div>

            <div className="flex items-center gap-2">
              <FiPhone className="text-red-500" />
              <span className="text-white/70">{callLabel}</span>
              <a
                href={tel}
                className="text-red-500 font-extrabold tracking-wide hover:text-red-400 transition whitespace-nowrap"
              >
                {phone}
              </a>
            </div>

            {LangBtn ? (
              <div className="flex items-center gap-2">
                <FiGlobe className="text-white/70" />
                <LangBtn code="uz" label="O'z" />
                <span className="text-white/40">|</span>
                <LangBtn code="ru" label="Ru" />
              </div>
            ) : null}
          </div>

          {/* RIGHT MOBILE (<lg): only icons / compact */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <a
              href={tel}
              className="btn btn-ghost btn-sm px-2 text-red-500"
              aria-label="Call"
              title={phone}
            >
              <FiPhone />
            </a>

            {LangBtn ? (
              <div className="flex items-center gap-2 text-xs">
                <FiGlobe className="text-white/70" />
                <LangBtn code="uz" label="O'z" />
                <span className="text-white/40">|</span>
                <LangBtn code="ru" label="Ru" />
              </div>
            ) : null}
          </div>
        </div>

        {/* BOTTOM ROW: responsive text lines (prevents layout breaking) */}
        <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} EVEN. Все права защищены
          </div>

          {/* show small info row on mobile/tablet only */}
          <div className="lg:hidden text-xs text-white/70 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <div className="flex items-center gap-2">
              <FiClock className="text-red-500" />
              <span className="whitespace-nowrap">{workHours}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>{callLabel}</span>
              <a href={tel} className="text-red-500 font-extrabold">
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
