import React from "react";
import {
    FiFileText,
    FiHeadphones,
    FiEdit3,
    FiSettings,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FiClock } from "react-icons/fi";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function SolutionsSection({ t }) {
    const data = t?.solutions;
    const items = data?.items || [];

    // ✅ порядок под макет (6 штук)
    const icons = [
        FiFileText,        // договор
        FiHeadphones,      // контакт
        FiEdit3,           // мастера/дизайн
        FiSettings,        // проект-менеджер/процесс
        FiClock,           // сроки
        HiOutlineLightBulb // технологии/качество
    ];

    if (!data) return null;

    return (
        <section className="bg-white text-neutral-900">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 md:py-20">
                <h2 className="text-center font-black uppercase tracking-wide text-2xl sm:text-3xl md:text-5xl">
                    {data.title}
                </h2>

                <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10 md:gap-y-16">
                    {items.slice(0, 6).map((text, idx) => {
                        const Icon = icons[idx] || FiFileText;

                        return (
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
                                <article key={idx} className="flex flex-col items-center text-center">
                                    <div className="text-red-600">
                                        <Icon className="w-12 h-12 md:w-14 md:h-14" />
                                    </div>

                                    <p className="mt-6 text-neutral-700 font-medium leading-relaxed whitespace-pre-line max-w-[360px]">
                                        {text}
                                    </p>
                                </article>
                            </AnimatedContent>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
