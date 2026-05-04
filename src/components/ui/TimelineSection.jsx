import { useLanguage } from "../../context/LanguageContext";
import { getLocalized } from "../../utils/getLocalized";
import { SectionTitle } from "./SectionTitle";

function TimelineItem({ item, side }) {
  const { language } = useLanguage();
  const card = (
    <div className="one-experience">
      <p>{getLocalized(item.eyebrow, language)}</p>
      <h3>{getLocalized(item.title, language)}</h3>
      <p className="date">{getLocalized(item.date, language)}</p>
    </div>
  );
  const circle = <div className="white-circle" />;

  return (
    <div className={`${side}-experience`}>
      {side === "left" ? (
        <>
          {card}
          {circle}
        </>
      ) : (
        <>
          {circle}
          {card}
        </>
      )}
    </div>
  );
}

export function TimelineSection({ items, lineId, title }) {
  return (
    <div className="experience">
      <SectionTitle as="h2" className="timeline-heading" label={title} />
      <div className="row exp-row">
        <div className="absolute exp-line-container">
          <div className="exp-line" id={lineId} />
        </div>
        {items.map((item, index) => (
          <TimelineItem
            key={`${getLocalized(item.title, "en")}-${index}`}
            item={item}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
