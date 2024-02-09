import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./locales/i18n";

export const defaultNS = "translations";

const options: InitOptions = {
  debug: process.env.NODE_ENV === "development",
  lng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translations }, // Update this line to directly use 'translations' object
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;
