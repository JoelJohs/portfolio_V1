import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import CTAButton from "./buttons/CTAButton";

const ProjectCard = ({ project, onClick }) => {
  const { t } = useTranslation();

  const handleCardClick = (e) => {
    if (!e.target.closest("a")) {
      onClick();
    }
  };

  return (
    <div
      className="bg-card-gradient backdrop-blur-md border border-opacity-20 border-accent rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] hover:scale-105 hover:shadow-lg hover:border-accent relative overflow-hidden w-full max-w-md mx-auto cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></div>
      <div className="project-content p-4">
        <h3 className="mb-4">{project.title}</h3>
        <p className="mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-opacity-15 bg-accent text-white py-1 px-3 rounded-full text-sm font-bold transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:brightness-125"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <CTAButton
            label={t("projects.viewCode")}
            href={project.codeLink}
            variant="primary"
            target="_blank"
            useIcon={true}
          />
          <CTAButton
            label={t("projects.liveDemo")}
            href={project.liveDemo}
            variant="secondary"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    codeLink: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
