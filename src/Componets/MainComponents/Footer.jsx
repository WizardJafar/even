import React from "react";

/**
 * Простой футер как на макете:
 * EVEN слева
 * текст по центру
 * PERFECT MEDIA справа
 */
export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          {/* LEFT: EVEN */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-[2px]">
              <span className="block w-4 h-[3px] bg-red-600" />
              <span className="block w-4 h-[3px] bg-red-600" />
              <span className="block w-4 h-[3px] bg-red-600" />
            </div>
            <span className="text-white font-black tracking-wide text-lg">
              EVEN
            </span>
          </div>

          {/* CENTER TEXT (hidden on small) */}
          <div className="hidden md:block text-sm text-white/50">
            © {new Date().getFullYear()} EVEN. Все права защищены
          </div>

          {/* RIGHT: Perfect Media */}
          <div className="flex items-center gap-3 text-white/60">
            <span className="hidden sm:block text-sm">
              Сайт был разработан
            </span>

            <div className="flex items-center gap-2 font-semibold tracking-wide">
              <div className="w-7 h-7 border border-white/30 flex items-center justify-center">
                PM
              </div>
              <span>PERFECT MEDIA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
