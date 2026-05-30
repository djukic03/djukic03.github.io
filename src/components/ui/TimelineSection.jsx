import { useEffect, useRef } from "react";
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
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return undefined;
    }

    const updateTimelineLine = () => {
      const circles = row.querySelectorAll(".left-experience .white-circle, .right-experience .white-circle");
      const lineContainer = row.querySelector(".exp-line-container");

      if (!lineContainer || circles.length < 2) {
        return;
      }

      const rowRect = row.getBoundingClientRect();
      const lastCircleRect = circles[circles.length - 1].getBoundingClientRect();
      const bottom = lastCircleRect.top - rowRect.top + lastCircleRect.height / 2;

      lineContainer.style.setProperty("--timeline-line-height", `${Math.max(0, bottom)}px`);
    };

    updateTimelineLine();

    const resizeObserver = new ResizeObserver(updateTimelineLine);
    resizeObserver.observe(row);
    window.addEventListener("resize", updateTimelineLine);
    document.fonts?.ready?.then(updateTimelineLine);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTimelineLine);
    };
  }, [items]);

  return (
    <div className="experience">
      <SectionTitle as="h2" className="timeline-heading" label={title} />
      <div className="row exp-row" ref={rowRef}>
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
