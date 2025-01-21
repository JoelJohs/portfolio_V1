import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUniversity,
  faBriefcase,
  faCodeBranch,
  faDatabase,
  faServer,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import TechnologiesCarrousel from "../components/TechnologiesCarrousel";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col p-8 md:px-16 md:py-20 bg-[var(--bg-opacity)]"
    >
      <h1 className="font-bold mb-10 text-center">{t('about.title')}</h1>
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="md:w-1/3 md:grid md:grid-cols-2 items-center gap-10">
          <div className="flex items-center my-5 md:my-0 gap-2 text-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
            <p>{t('about.location')}</p>
          </div>
          <div className="flex items-center my-5 md:my-0 gap-2 text-center">
            <FontAwesomeIcon icon={faUniversity} size="3x" />
            <p>{t('about.education')}</p>
          </div>
          <div className="flex items-center my-5 md:my-0 gap-2 text-center">
            <FontAwesomeIcon icon={faBriefcase} size="3x" />
            <p>{t('about.experience')}</p>
          </div>
          <div className="flex items-center mt-5 md:my-0 gap-2 text-center">
            <FontAwesomeIcon icon={faCodeBranch} size="3x" />
            <p>{t('about.projects')}</p>
          </div>
        </div>

        <div className="md:w-2/3 mt-10 md:mt-0">
          <p className="leading-relaxed">
            {t('about.description1')}
          </p>
          <p className="mt-5 leading-relaxed">
            {t('about.description2')}
          </p>
          <p className="mt-5 leading-relaxed">
            {t('about.description3')}
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="font-semibold text-center">{t('about.technicalExpertise')}</h2>
        <div className="mt-10 technologies-carousel">
          <TechnologiesCarrousel />
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-center">{t('about.keySkills')}</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            <p>{t('about.skills.versionControl')}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p>{t('about.skills.databaseManagement')}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLaptopCode} size="2x" />
            <p>{t('about.skills.frontendDevelopment')}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faServer} size="2x" />
            <p>{t('about.skills.backendDevelopment')}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCodeBranch} size="2x" />
            <p>{t('about.skills.apiDesign')}</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faDatabase} size="2x" />
            <p>{t('about.skills.dataModeling')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
