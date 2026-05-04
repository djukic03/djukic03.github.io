import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getLocalized } from "../../utils/getLocalized";

export function ProjectCard({ project }) {
  const { language, t } = useLanguage();

  return (
    <div className="one-project">
      <div className="img">
        <img
          src={project.image}
          alt={project.imageAlt}
          style={project.borderedImage ? { borderBottom: "1px solid white" } : undefined}
        />
      </div>
      <div className="skills">
        <div className="row">
          {project.technologies.map((technology) => (
            <p key={technology}>{technology}</p>
          ))}
        </div>
      </div>
      <div className="desc">
        <p className="title">{getLocalized(project.title, language)}</p>
        <p className="desc-text">{getLocalized(project.description, language)}</p>
        <Link to="/projects">
          <button className="btn view-more" type="button">
            {t.common.viewMore}
          </button>
        </Link>
      </div>
    </div>
  );
}
