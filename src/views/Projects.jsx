import { useTranslation } from "react-i18next";
import ProjectsData from "../data/projects.jsx"; // Update the import path
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { t } = useTranslation();
  const projects = ProjectsData();

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col p-10 md:px-20 md:py-20"
    >
      <h1 className="mb-10 text-center text-3xl font-bold">
        {t("projects.title")}
      </h1>
      <p className="leading-relaxed text-center mb-10 text-lg">
        {t("projects.description")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
