import { PageTitle } from "../components/ui/PageTitle";
import { TimelineSection } from "../components/ui/TimelineSection";
import { useLanguage } from "../context/LanguageContext";
import { icons } from "../data/assets";
import { profile } from "../data/profile";
import { certificateItems, educationItems, experienceItems } from "../data/timeline";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useIntersectionReveal } from "../hooks/useIntersectionReveal";

export function About() {
  const { t } = useLanguage();
  useDocumentTitle(t.about.documentTitle);
  useIntersectionReveal(".left-experience, .right-experience, .white-circle");

  return (
    <>
      <PageTitle className="about" title={t.about.pageTitle} />

      <div className="cv">
        <div className="cv-line-1" />
        <div className="cv-download">
          <a href={profile.cvUrl} target="_blank" rel="noreferrer">
            <button className="btn" id="download-cv" type="button">
              {t.about.downloadCv}
              <img src={icons.download} alt="download" />
            </button>
          </a>
        </div>
        <div className="cv-line-2" />
      </div>

      <TimelineSection title={t.about.experience} items={experienceItems} />
      <TimelineSection title={t.about.education} items={educationItems} />
      <TimelineSection title={t.about.certificates} items={certificateItems} />
    </>
  );
}
