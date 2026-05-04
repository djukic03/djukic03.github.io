import { AboutPreview } from "../components/sections/AboutPreview";
import { ContactSection } from "../components/sections/ContactSection";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { HeroSection } from "../components/sections/HeroSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { useLanguage } from "../context/LanguageContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Home() {
  const { t } = useLanguage();
  useDocumentTitle(t.home.documentTitle);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
