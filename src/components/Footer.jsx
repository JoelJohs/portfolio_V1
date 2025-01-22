import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary p-8 text-center">
      <div className="footer-content max-w-7xl mx-auto flex justify-between items-center">
        <p>{t("footer.copyright")}</p>
        <div className="social-links flex gap-6">
          <a
            href="https://github.com/JoelJohs"
            target="_blank"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-card-bg transition-all hover:translate-y-[-3px] hover:bg-accent hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-johs/"
            target="_blank"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-card-bg transition-all hover:translate-y-[-3px] hover:bg-accent hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
