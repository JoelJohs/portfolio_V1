import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { supabase } from "../supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("Data").insert([formData]);

    setLoading(false);

    if (error) {
      toast.error(t("contact.errorMessage") + error.message);
    } else {
      toast.success(t("contact.successMessage"));
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col p-8 md:px-16 md:py-20 bg-[var(--bg-opacity)]"
    >
      <h2 className="font-bold mb-10 text-center">{t("contact.title")}</h2>
      <div className="contact-content flex flex-col gap-10 max-w-5xl mx-auto md:flex-row">
        <div className="contact-info flex flex-col gap-6 md:w-1/2">
          <div className="contact-item flex items-center gap-4 p-4 rounded-lg transition-all hover:bg-[var(--card-bg)] hover:translate-x-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="text-[var(--accent)]"
            />
            <a
              href="mailto:jojohersa21@gmail.com"
              className="text-lg md:text-xl"
            >
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
              className="text-lg md:text-xl"
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
              className="text-lg md:text-xl"
            >
              {t("contact.linkedin")}
            </a>
          </div>
        </div>
        <form
          id="contact-form"
          className="contact-form flex flex-col gap-6 md:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t("contact.namePlaceholder")}
              className="w-full p-4 bg-[var(--primary)] border-2 border-transparent text-[var(--text-primary)] rounded-lg transition-all focus:border-[var(--accent)] focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              required
              placeholder={t("contact.messagePlaceholder")}
              className="w-full p-4 bg-[var(--primary)] border-2 border-transparent text-[var(--text-primary)] rounded-lg transition-all focus:border-[var(--accent)] focus:shadow-outline h-40 resize-vertical"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`btn primary relative overflow-hidden p-4 rounded-lg transition-all hover:scale-105 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[var(--accent)] text-[var(--primary)]"
            }`}
            disabled={loading}
          >
            {loading ? t("contact.sending") : t("contact.sendMessage")}
            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
