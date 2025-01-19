/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // Fondo principal
        secondary: "var(--secondary)", // Fondo secundario
        accent: "var(--accent)", // Color llamativo
        "text-primary": "var(--text-primary)", // Texto principal
        "text-secondary": "var(--text-secondary)", // Texto secundario
        "nav-bg": "var(--nav-bg)", // Fondo de la barra de navegación
      },
    },
  },
  plugins: [],
};
