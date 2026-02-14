import React, { useMemo, useState } from "react";
import { useSiteConfig } from "../Hooks/useSiteConfig";

import Header from "../Componets/MainComponents/Header";
import Footer from "../Componets/MainComponents/Footer";

import HeroStatsBar from "../Componets/Sections/HeroStatsBar";
import OurServicesGrid from "../Componets/Sections/OurServicesGrid";
import ProblemsSection from "../Componets/Sections/ProblemsSection";
import SolutionsSection from "../Componets/Sections/SolutionsSection";
import WorkflowSection from "../Componets/Sections/WorkflowSection";
import LettersOrderForm from "../Componets/Sections/LettersOrderForm";
import PartnershipForm from "../Componets/Sections/PartnershipForm";
import ContactsMapCard from "../Componets/Sections/ContactsMapCard";
import OurPartners from "../Componets/Sections/OurPartners";

const Home = () => {
  const { site, loading, error } = useSiteConfig();
  const [lang, setLang] = useState("ru");

  const t = useMemo(() => {
    const i18n = site?.i18n || {};
    const safeLang = (lang || "ru").toLowerCase().trim();
    return i18n?.[safeLang] ?? i18n?.ru ?? {};
  }, [site, lang]);

  return (
    <div>
      <Header
        site={site}
        lang={lang}
        setLang={setLang}
        t={t}
        loading={loading}
        error={error}
      />

      {/* ✅ ВАЖНО: передаём t везде где есть текст */}
      <HeroStatsBar t={t} loading={loading} />

      <OurServicesGrid t={t} loading={loading} />

      <ProblemsSection t={t} loading={loading} />
      <SolutionsSection t={t} loading={loading} />
      <WorkflowSection t={t} loading={loading} />


      <LettersOrderForm t={t} loading={loading} />
      <PartnershipForm t={t} loading={loading} />
      <OurPartners t={t} />
      <ContactsMapCard t={t} loading={loading} />


      <Footer />
    </div>
  );
};

export default Home;
