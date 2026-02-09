import React, { useMemo } from "react";
import AnimatedContent from "../ReactBits/AnimatedContent";

// ===== IMAGES =====
import img3D from "../../assets/3D.jpg";
import lightboxHero from "../../assets/lightbox_Hero.jpg";
import van from "../../assets/van.png";
import neon from "../../assets/neon.png";
import stels from "../../assets/stels.png";
import roof from "../../assets/roof.png";
import tables from "../../assets/tables.png";
import plotter from "../../assets/plotter.png";
import offers from "../../assets/offers.jpg";
import ceramic from "../../assets/ceramic.png";
import rover from "../../assets/rover.png";
import emblem from "../../assets/emblem.png";

const SERVICE_IMAGES = [
  img3D,
  lightboxHero,
  van,
  neon,
  stels,
  roof,
  tables,
  plotter,
  offers,
  ceramic,
  rover,
  emblem,
];

const FALLBACK_SERVICES = { title: "", btn: "", items: [] };

export default function OurServicesSectionGrid({ t, loading }) {
  // ✅ как в HeroStatsBar: t = объект языка (ru/uz)
  const services = useMemo(() => {
    return t?.services || FALLBACK_SERVICES;
  }, [t]);

  if (loading) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-10 md:py-14">
        <h2 className="text-center font-extrabold tracking-wide text-neutral-900 text-lg md:text-xl uppercase">
          {services.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((title, i) => (
            <article key={i} className="bg-[#1f262b] text-white shadow-md">
              <div className="px-4 pt-4">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-white/90">
                  {title}
                </p>
              </div>

              <div className="p-4 pt-3">
                <div className="relative w-full aspect-[4/3] bg-black/20 overflow-hidden">
                  <AnimatedContent>
                    <img
                      src={SERVICE_IMAGES[i] || SERVICE_IMAGES[0]}
                      alt={title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable="false"
                    />
                  </AnimatedContent>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="btn btn-outline border-red-600 text-neutral-900 hover:bg-red-600 hover:text-white rounded-none px-10">
            {services.btn} <span className="ml-2">^</span>
          </button>
        </div>
      </div>
    </section>
  );
}
