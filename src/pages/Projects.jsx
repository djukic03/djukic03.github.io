import { ProjectCard } from "../components/ui/ProjectCard";
import { PageTitle } from "../components/ui/PageTitle";
import { SectionTitle } from "../components/ui/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { projectCategories, projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function Projects() {
  const { t } = useLanguage();
  useDocumentTitle(t.projects.documentTitle);

  return (
    <>
      <div className="page-title-container">
        <PageTitle className="my-projects" title={t.projects.pageTitle} />
        <p className="page-desc">{t.projects.pageDesc}</p>
      </div>

      {projectCategories.map((category) => (
        <div className="projects" key={category.id}>
          <SectionTitle className="academic-projects" label={t.projects[category.titleKey]} />
          <div className="row all-projects">
            {projects
              .filter((project) => project.category === category.id)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
