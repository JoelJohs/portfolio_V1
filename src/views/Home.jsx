import CTAButton from "../components/buttons/CTAButton";
import EmailButton from "../components/buttons/EmailButton";
import DownloadCVButton from "../components/buttons/DownloadCVButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const handleDownloadCV = () => {
    const cvPath =
      i18n.language === "es"
        ? "cv/CV_Joel_Josafat_Hernández_Saucedo_Español.pdf"
        : "cv/CV_Joel_Josafat_Hernández_Saucedo_English.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = cvPath.split("/").pop();
    link.click();
  };

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
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-4 px-6 md:px-0 w-full md:w-auto">
            <EmailButton email={"jojohersa21@gmail.com"} />
            <DownloadCVButton onClick={handleDownloadCV} />
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
