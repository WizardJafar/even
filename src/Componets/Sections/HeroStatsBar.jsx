import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaRulerCombined,
  FaHandshake,
  FaBriefcase,
} from "react-icons/fa";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function HeroStatsBar({ t, loading }) {
  const stats = t?.heroStats || [];
  const icons = [FaGraduationCap, FaUsers, FaRulerCombined, FaHandshake, FaBriefcase];

  return (
    <section className="w-full bg-[#1f262b]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 md:gap-y-12 gap-x-6">
            {(loading ? Array.from({ length: 5 }) : stats.slice(0, 5)).map((it, idx) => {
              const Icon = icons[idx] || FaBriefcase;

              if (loading) {
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3">
                      <div className="skeleton w-9 h-9 bg-white/10" />
                      <div className="skeleton h-7 w-24 bg-white/10" />
                    </div>
                    <div className="mt-4 skeleton h-4 w-40 bg-white/10" />
                  </div>
                );
              }

              return (
                <div key={idx} className="flex flex-col items-center text-center">
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

                    <div className="flex items-center justify-center gap-3">
                      <span className="text-red-500 text-[34px] leading-none">
                        <Icon />
                      </span>
                      <span className="text-white font-extrabold tracking-tight text-3xl sm:text-4xl md:text-[44px] leading-none">
                        {it?.value}
                      </span>
                    </div>

                    <p className="mt-4 text-white/90 text-sm md:text-base leading-snug">
                      {it?.label}
                    </p>
                  </AnimatedContent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
