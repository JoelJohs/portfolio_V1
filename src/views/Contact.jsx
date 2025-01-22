import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col p-8 md:px-16 md:py-20 bg-[var(--bg-opacity)]"
    >
      <h2 className="font-bold mb-10 text-center">{t("contact.title")}</h2>
      <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="contact-info flex flex-col gap-6">
          <div className="contact-item flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-[var(--card-bg)] hover:translate-x-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="text-[var(--accent)]"
            />
            <a href="mailto:jojohersa21@gmail.com" className="text-lg">
              {t("contact.email")}
            </a>
          </div>
          <div className="contact-item flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-[var(--card-bg)] hover:translate-x-2">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="text-[var(--accent)]"
            />
            <a
              href="https://github.com/JoelJohs"
              target="_blank"
              className="text-lg"
            >
              {t("contact.github")}
            </a>
          </div>
          <div className="contact-item flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-[var(--card-bg)] hover:translate-x-2">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-[var(--accent)]"
            />
            <a
              href="https://www.linkedin.com/in/joel-johs/"
              target="_blank"
              className="text-lg"
            >
              {t("contact.linkedin")}
            </a>
          </div>
        </div>
        <form id="contact-form" className="contact-form flex flex-col gap-6">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t("contact.namePlaceholder")}
              className="w-full p-4 bg-[var(--primary)] border-2 border-transparent text-[var(--text-primary)] rounded-lg transition-all focus:border-[var(--accent)] focus:shadow-outline"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t("contact.emailPlaceholder")}
              className="w-full p-4 bg-[var(--primary)] border-2 border-transparent text-[var(--text-primary)] rounded-lg transition-all focus:border-[var(--accent)] focus:shadow-outline"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              required
              placeholder={t("contact.messagePlaceholder")}
              className="w-full p-4 bg-[var(--primary)] border-2 border-transparent text-[var(--text-primary)] rounded-lg transition-all focus:border-[var(--accent)] focus:shadow-outline h-40 resize-vertical"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn primary relative overflow-hidden p-4 bg-[var(--accent)] text-[var(--primary)] rounded-lg transition-all hover:scale-105"
          >
            {t("contact.sendMessage")}
            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
