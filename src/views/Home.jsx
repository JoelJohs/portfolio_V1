import CTAButton from "../components/buttons/CTAButton";
import EmailButton from "../components/buttons/EmailButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center relative"
    >
      <div className="mb-5 md:mb-0 relative mx-5 flex justify-center md:justify-start">
        <div className="image-container">
          <img
            src="/yo_2.jpg"
            alt="Imagen de Joel Johs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="md:mx-5 flex justify-center md:justify-start">
        <div>
          <h1 className="mb-2 text-center md:text-left">
            {t("home.greeting")}{" "}
            <span className="gradient-text">{t("home.name")}</span>
          </h1>
          <h2 className="mb-2 text-center md:text-left">
            {t("home.profession")}
          </h2>
          <p className="mb-4 text-center md:text-left">{t("home.focus")}</p>
          <div className="flex justify-center md:justify-start">
            <EmailButton email={"jojohersa21@gmail.com"} />
          </div>
          <div className="flex gap-4 my-4 justify-center md:justify-start">
            <CTAButton
              label={t("home.ctaProjects")}
              href="#projects"
              variant="primary"
            />
            <CTAButton
              label={t("home.ctaContact")}
              href="#contact"
              variant="secondary"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 w-full flex justify-center">
        <div className="animate-bounce ">
          <FontAwesomeIcon icon={faChevronDown} size="3x" />
        </div>
      </div>
    </main>
  );
};

export default Home;
