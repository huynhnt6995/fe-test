import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jp from "./assets/locales/jp/translation.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "jp",
    lng: "jp",
    debug: false,

    interpolation: {
      escapeValue: false,
    },
    resources: { jp: { translation: jp } },
  });

export default i18n;
