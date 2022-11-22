import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
import Backend from 'i18next-locize-backend';

const DETECTION_OPTIONS = {
  order: ['navigator']
};


i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    detection: DETECTION_OPTIONS,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: global_en
        }
      },
      es: {
        translation: global_es,
    }
  });

const locizeOptions = {
  projectId: '',
  apiKey: '',
  // referenceLng: 'en',
};


// Work with backend
// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//     backend: locizeOptions,
//     saveMissing: true
//   });