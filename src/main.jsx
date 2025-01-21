import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ThemeProvider from "./providers/ThemeProvider";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

//* Languages imports
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") || navigator.language.split("-")[0],
  fallbackLng: "es",
  ns: ["global"],
  defaultNS: "global",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
);
