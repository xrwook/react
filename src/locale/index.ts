// import axios from 'axios';
import i18n from 'i18next';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import ko from './ko';
import en from './en';
import fr from './fr';

// export default { ko, en, fr };

const localeData = async (locale: string) => {
  let setlocale: unknown;
  switch (locale) {
    case 'en':
      setlocale = en;
      break;
    case 'ko':
      setlocale = ko;
      break;
    case 'fr':
      setlocale = fr;
      break;
  }

  return new Promise((resolve) => {
    resolve(setlocale);
  });
};

const loadResources = async (locale: string) => {
  const data = await localeData(locale);
  console.log(JSON.stringify(data));
  return data;
  // return await axios
};

const backendOptions = {
  loadPath: '{{lng}}|{{ns}}',
  request: (options: any, url: any, payload: any, callback: any) => {
    try {
      const [lng] = url.split('|');
      loadResources(lng).then((response) => {
        callback(null, {
          data: response,
          status: 200,
        });
      });
    } catch (e) {
      console.log(e, 'error from language');
      callback(null, {
        status: 500,
      });
    }
  },
};

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    fallbackLng: 'ko',
    debug: false,
    lng: localStorage.getItem('locale') || 'ko',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
