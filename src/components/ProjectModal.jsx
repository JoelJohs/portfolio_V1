import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 modal-overlay"
      onClick={handleOutsideClick}
    >
      <button
        className="absolute top-4 right-4 text-white text-5xl hover:text-accent"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 max-w-4xl w-full relative mx-4 md:mx-8 lg:mx-16 overflow-y-auto max-h-full custom-scrollbar">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-t-lg mb-6"
        />
        <h2 className="mb-6 ">{project.title}</h2>
        <p className="mb-8 leading-relaxed">{project.longDescription}</p>
        <h3 className="mb-4 text-lg font-bold">{t("projects.keyFeatures")}</h3>
        <ul className="mb-8 list-disc list-inside">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="mb-4 text-lg font-bold">{t("projects.technologyStack")}</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologyStack.map((tech, index) => (
            <span
              key={index}
              className="bg-opacity-15 bg-accent text-white py-1 px-3 rounded-full text-sm font-bold transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:brightness-125"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">{project.note}</p>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    note: PropTypes.string,
    keyFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    technologyStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
