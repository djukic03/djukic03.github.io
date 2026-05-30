import { Link, Navigate, useParams } from "react-router-dom";
import { PageTitle } from "../components/ui/PageTitle";
import { SectionTitle } from "../components/ui/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getLocalized } from "../utils/getLocalized";

function ProjectLink({ href, label }) {
  if (!href) {
    return null;
  }

  return (
    <a className="project-detail-link" href={href} target="_blank" rel="noreferrer">
      {label} -&gt;
    </a>
  );
}

function ProjectMedia({ language, media }) {
  if (!media?.length) {
    return null;
  }

  return (
    <div className="project-media-grid">
      {media.map((item) => (
        <div className="project-media-item" key={item.src}>
          {item.type === "video" ? (
            <video controls poster={item.poster}>
              <source src={item.src} />
            </video>
          ) : (
            <img src={item.src} alt={getLocalized(item.alt, language) || ""} />
          )}
        </div>
      ))}
    </div>
  );
}

export function ProjectDetail() {
  const { projectId } = useParams();
  const { language, t } = useLanguage();
  const project = projects.find((currentProject) => currentProject.id === projectId);

  const title = getLocalized(project?.title, language);
  useDocumentTitle(project ? `${title} | ${t.projects.documentTitle}` : t.projects.documentTitle);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const details = getLocalized(project.details, language);
  const hasDetails = Array.isArray(details) && details.length > 0;
  const hasMedia = project.media?.length > 0;
  const hasLinks = Boolean(project.githubUrl || project.demoUrl);

  return (
    <>
      <Link className="back-to-projects" to="/projects">
        {t.projects.backToProjects}
      </Link>

      <div className="project-detail-hero">
        <div className="project-detail-heading">
          <PageTitle className="project-detail-title" title={title} />
          <p className="project-detail-summary">{getLocalized(project.description, language)}</p>
        </div>

        <div className="project-detail-cover">
          <img src={project.image} alt={project.imageAlt} />
        </div>
      </div>

      {hasMedia && (
        <section className="project-detail-section">
          <SectionTitle className="project-media" label={t.projects.mediaSection} />
          <ProjectMedia language={language} media={project.media} />
        </section>
      )}

      {hasDetails && (
        <section className="project-detail-section">
          <SectionTitle className="project-overview" label={t.projects.overview} />
          <div className="project-detail-content">
            {details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      <section
        className={`project-detail-section project-detail-bottom-grid${
          hasLinks ? "" : " project-detail-bottom-grid-single"
        }`}
      >
        <div>
          <SectionTitle className="project-tech-stack" label={t.projects.techStack} line={false} />
          <div className="project-detail-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {hasLinks && (
          <div>
            <SectionTitle className="project-links" label={t.projects.links} line={false} />
            <div className="project-detail-links">
              <ProjectLink href={project.githubUrl} label={t.projects.githubRepository} />
              <ProjectLink href={project.demoUrl} label={t.projects.liveDemo} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
