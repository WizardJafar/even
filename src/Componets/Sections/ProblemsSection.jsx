import React from "react";
import { IoWarning } from "react-icons/io5";

// ✅ ИЗОБРАЖЕНИЯ ТОЛЬКО ВО ФРОНТЕ (замени на свои)
import p1 from "../../assets/conveir.png";
import p2 from "../../assets/interner.png";
import p3 from "../../assets/letter.png";
import p4 from "../../assets/ne.png";
import p5 from "../../assets/law.png";
import p6 from "../../assets/magazine.png";
import AnimatedContent from "../ReactBits/AnimatedContent";

export default function ProblemsSection({ t }) {
    const data = t?.problems;
    const items = data?.items || [];

    // 6 картинок — порядок соответствует items[0..5]
    const images = [p1, p2, p3, p4, p5, p6];

    if (!data) return null;

    return (
        <section className="w-full bg-[#20262B] text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 md:py-20">
                <h2 className="text-center font-black uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl">
                    {data.title}
                </h2>

                <p className="text-center mt-5 text-white/85 font-semibold text-base md:text-lg">
                    {data.subtitle}
                </p>

                {/* GRID: 1 -> 2 -> 3 */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 md:gap-y-16">
                    {items.slice(0, 6).map((text, idx) => (
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
                            <article className="flex flex-col items-center text-center">
                                {/* БЕЛЫЙ КРУГ */}
                                <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full bg-white overflow-visible flex items-center justify-center">

                                    {/* КАРТИНКА — ВЫПИРАЕТ */}
                                    <img
                                        src={images[idx]}
                                        alt=""
                                        className="
        absolute
        w-[140%]
        max-w-none
        -translate-y-3
        drop-shadow-xl
        select-none
        pointer-events-none
      "
                                        draggable="false"
                                    />

                                    {/* WARNING */}
                                    <span className="absolute -top-3 -left-3 z-10">
                                        <span className="w-12 h-12 text-red-500 drop-shadow-lg">
                                            <IoWarning className="w-full h-full" />
                                        </span>
                                    </span>
                                </div>

                                {/* ТЕКСТ */}
                                <p className="mt-6 text-white/90 leading-relaxed whitespace-pre-line font-semibold text-sm md:text-base max-w-[360px]">
                                    {text}
                                </p>
                            </article>
                        </AnimatedContent>

                    ))}
                </div>
            </div>
        </section>
    );
}
