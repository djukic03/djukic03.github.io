import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { images } from "../../data/assets";
import { featuredProjectIds, projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export function FeaturedProjects() {
  const { t } = useLanguage();
  const featuredProjects = featuredProjectIds
    .map((projectId) => projects.find((project) => project.id === projectId))
    .filter(Boolean);

  return (
    <div className="projects">
      <div className="row" id="projects-title" style={{ justifyContent: "space-between", width: "100%" }}>
        <div className="row section-title" style={{ width: "88%", justifyContent: "flex-start" }}>
          <p className="hash">#</p>
          <a className="my-projects">{t.home.projects.title}</a>
          <div className="pink-line" />
        </div>
        <Link className="view-all" to="/projects">
          {t.home.projects.viewAll}
        </Link>
      </div>

      <div className="row all-projects">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="absolute">
        <img className="dots" src={images.dots} alt="" aria-hidden="true" />
      </div>
    </div>
  );
}
