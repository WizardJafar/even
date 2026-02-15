import React, { useState, useEffect } from "react";
import LogoLoop from "../ReactBits/LogoLoop";
import AnimatedContent from "../ReactBits/AnimatedContent";

import cola from '../../assets/partners/cola.png';
import dewalt from '../../assets/partners/dewalt.png';
import fak from '../../assets/partners/fak.png';
import hikv from '../../assets/partners/hikv.png';
import imp from '../../assets/partners/imp.png';
import max from '../../assets/partners/max.png';
import my5 from '../../assets/partners/my5.png';
import pizza from '../../assets/partners/pizza.png';
import sev from '../../assets/partners/sev.png';
import uzk from '../../assets/partners/uzk.png';
import { FaTelegramPlane } from "react-icons/fa";

const techLogos = [
    { src: cola, title: "Cola" },
    { src: dewalt, title: "Dewalt" },
    { src: fak, title: "Fak" },
    { src: hikv, title: "Hikv" },
    { src: imp, title: "Imp" },
    { src: max, title: "Max" },
    { src: my5, title: "My5" },
    { src: pizza, title: "Pizza" },
    { src: sev, title: "Sev" },
    { src: uzk, title: "Uzk" },
];

const OurPartners = ({ t }) => {
    const [visibleCount, setVisibleCount] = useState(4); // сколько логотипов показать сразу
    const [loadingMore, setLoadingMore] = useState(false);
    const partnersTitle = t?.partnersTitle || "НАШИ ПАРТНЕРЫ";
    const portfolioTitle = t?.portfolioTitle || "НАШЕ ПОРТФОЛИО";
    const portfolioTitleBtn = t?.portfolioTitleBtn || "Посмотреть портфолио";
    const handleLoadMore = () => {
        if (visibleCount >= techLogos.length) return;
        setLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 4, techLogos.length));
            setLoadingMore(false);
        }, []); // имитация загрузки
    };

    // Можно добавить scroll listener для автоматической подгрузки
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
                visibleCount < techLogos.length &&
                !loadingMore
            ) {
                handleLoadMore();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [visibleCount, loadingMore]);

    return (
        <section className="py-10 bg-neutral-100/50">
            <p className="text-center font-extrabold tracking-wide text-red-500 text-2xl sm:text-3xl md:text-5xl uppercase mb-10">
                {partnersTitle}
            </p>

            {/* Desktop: LogoLoop */}
            <div className="hidden lg:block">
                <LogoLoop
                    logos={techLogos.map((logo) => ({
                        node: <img src={logo.src} alt={logo.title} className="w-50 h-28 object-contain" />,
                        title: logo.title,
                        href: logo.href || "#"
                    }))}
                    speed={150}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                />
            </div>

            {/* Tablet & Mobile: grid с ленивой загрузкой */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden px-6 justify-items-center">
                {techLogos.slice(0, visibleCount).map((logo) => (
                    <div key={logo.title} className="flex justify-center items-center">
                        <AnimatedContent
                            distance={60}
                            direction="vertical"
                            reverse={false}
                            duration={0.7}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
                            <img
                                src={logo.src}
                                alt={logo.title}
                                className="w-36 sm:w-40 object-contain"
                            />
                        </AnimatedContent>
                    </div>
                ))}
                {loadingMore && (
                    <div className="col-span-full text-center text-gray-500 mt-4">
                        Загрузка...
                    </div>
                )}
            </div>
            <div className="text-center mt-8">
                <p className=" text-center font-extrabold tracking-wide text-red-500 text-2xl sm:text-3xl md:text-5xl uppercase mb-10">{portfolioTitle}</p>
                <a href="https://t.me/viveski_uz" target="_blank" >
                    <button className="btn  btn-soft hover:bg-red-600 text-red-500 border-red-500 hover:text-white font-bold py-3 px-6 rounded-full inline-flex items-center">
                       {portfolioTitleBtn}<FaTelegramPlane className="inline-block w-5 h-5 ml-2" />
                    </button>
                </a>
            </div>
        </section>
    );
};

export default OurPartners;