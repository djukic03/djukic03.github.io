import { useLanguage } from "../../context/LanguageContext";
import { images } from "../../data/assets";
import { skillColumns } from "../../data/skills";
import { SectionTitle } from "../ui/SectionTitle";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <div className="skills-section">
      <SectionTitle className="my-skills" label={t.home.skills.title} />

      <div className="row" style={{ alignItems: "flex-start" }}>
        <div className="animation">
          <img className="dots" src={images.dots} alt="" aria-hidden="true" />
          <img className="rectangle" src={images.rectangleSmall} alt="" aria-hidden="true" />
          <img className="logo" src={images.logo} alt="" aria-hidden="true" />
          <img className="dots2" src={images.dots} alt="" aria-hidden="true" />
          <img className="rectangle2" src={images.rectangleSmall} alt="" aria-hidden="true" />
        </div>

        <div className="all-skills">
          {skillColumns.map((column, columnIndex) => (
            <div className="skills-row" key={columnIndex}>
              {column.map((group) => (
                <div className="one-set" key={group.titleKey}>
                  <div className="title">
                    <p>{t.skills[group.titleKey]}</p>
                  </div>
                  <div className="one-skill">
                    {group.items?.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    {group.itemKeys?.map((itemKey) => (
                      <p key={itemKey}>{t.skills[itemKey]}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
