import { useState, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import PropTypes from "prop-types";

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("light");

  //* Revisar el tema del sistema
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = Theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
