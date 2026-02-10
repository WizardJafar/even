import React from "react";
import {
    FiPhoneCall,
    FiHeadphones,
    FiMapPin,
    FiEdit3,
    FiClock,
    FiTruck,
    FiMessageSquare,
    FiPercent
} from "react-icons/fi";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function WorkflowSection({ t }) {
    const data = t?.workflow;
    if (!data) return null;

    const icons = [
        FiPhoneCall,
        FiHeadphones,
        FiMapPin,
        FiEdit3,
        FiClock,
        FiTruck,
        FiMessageSquare,
        FiPercent
    ];

    return (
        <section className="bg-[#1f262b] text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
                {/* TITLE */}
                <h2 className="text-center font-black uppercase tracking-wide text-2xl sm:text-3xl md:text-5xl">
                    {data.title}
                </h2>

                <p className="text-center mt-6 text-white/80 text-base md:text-lg max-w-4xl mx-auto">
                    {data.subtitle}
                </p>

                {/* GRID */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
                    {data.steps.map((text, idx) => {
                        const Icon = icons[idx];

                        return (
                            <div key={idx} className="relative text-center">
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
                                    {/* dashed line */}
                                    {idx % 4 !== 0 && (
                                        <span className="hidden lg:block absolute -left-12 top-8 w-10 border-t border-dashed border-white/40" />
                                    )}

                                    {/* big number background */}
                                    <span className="absolute inset-0 flex justify-center -top-10 text-[120px] font-black text-white/5 select-none pointer-events-none">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>

                                    {/* icon */}
                                    <div className="relative z-10 flex justify-center text-red-500">
                                        <Icon className="w-12 h-12 md:w-14 md:h-14" />
                                    </div>

                                    {/* text */}
                                    <p className="relative z-10 mt-6 text-white/90 leading-relaxed text-sm md:text-base">
                                        {text}
                                    </p>
                                </AnimatedContent>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
