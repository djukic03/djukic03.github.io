import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { images } from "../../data/assets";
import { SectionTitle } from "../ui/SectionTitle";
import { TextWithHighlights } from "../ui/TextWithHighlights";

export function AboutPreview() {
  const { t } = useLanguage();

  return (
    <div className="about-me">
      <SectionTitle className="about" label={t.home.about.title} />
      <div className="about-me-text">
        {t.home.about.paragraphs.map((paragraph, index) => (
          <p key={index}>
            <TextWithHighlights parts={paragraph} />
          </p>
        ))}
        <Link to="/about">
          <button className="btn" id="read-cv" type="button">
            {t.home.about.readCv}
          </button>
        </Link>
      </div>
      <div className="absolute">
        <img className="rectangle" src={images.rectangle} alt="" aria-hidden="true" />
      </div>
    </div>
  );
}
