import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggleButton = () => {
  const { Theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button p-2 rounded-full shadow-md w-12 h-12 flex items-center justify-center"
    >
      {Theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSun} size="lg" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
