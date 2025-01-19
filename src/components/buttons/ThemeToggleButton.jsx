import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { DarkModeIcon, LightModeIcon } from "../../assets/ThemeIcons";

const ThemeToggleButton = () => {
  const { Theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button p-2 rounded-full shadow-md"
    >
      {Theme === "light" ? (
        <DarkModeIcon width="1.5em" height="1.5em" />
      ) : (
        <LightModeIcon width="1.5em" height="1.5em" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
