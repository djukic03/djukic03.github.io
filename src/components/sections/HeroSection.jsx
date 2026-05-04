import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { images } from "../../data/assets";
import { Highlight } from "../ui/Highlight";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="row" id="hero">
      <div className="text">
        <h2 id="text-h2">
          {t.home.hero.introStart} <Highlight>{t.home.hero.role}</Highlight>{" "}
          {t.home.hero.introMiddle} <Highlight>{t.home.hero.faculty}</Highlight>{" "}
          {t.home.hero.introEnd}
        </h2>
        <p id="text-p">{t.home.hero.description}</p>
        <Link to="/contact">
          <button className="btn" id="btn-contact" type="button">
            {t.home.hero.cta}
          </button>
        </Link>
      </div>

      <div className="img">
        <img className="logo" src={images.logo} alt="logo" />
        <img className="picture" src={images.portrait} alt="Nemanja Đukić" />
        <img className="dots" src={images.dots} alt="" aria-hidden="true" />
        <div className="currently-working">
          <div className="square" />
          <p id="currently-working">
            {t.home.hero.currentlyWorking} <strong>{t.home.hero.currentlyWorkingHighlight}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
