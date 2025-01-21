import { useState } from "react";
import i18next from "i18next";

const TranslationButton = () => {
  const [language, setLanguage] = useState(i18next.language);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="translation-toggle-button font-extrabold p-2 rounded-full shadow-md w-12 h-12 flex items-center justify-center"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default TranslationButton;
