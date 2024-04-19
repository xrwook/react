// import axios from 'axios';
import i18n from 'i18next';
// import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import ko from './ko.json';
import en from './en.json';
import fr from './fr.json';
import { getItem } from '../utils/localStorage';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
  fr: {
    translation: fr,
  },
};

i18n
  // .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    debug: false,
    lng: getItem<{ locale: string }>('locale')?.locale || 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
