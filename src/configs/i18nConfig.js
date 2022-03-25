import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUZ from './locales/uz/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n.use(initReactI18next).init({
  debug: false,
  compatibilityJSON: 'v3',
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  keySeparator: '^',
  nsSeparator: '~',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;

export const languageMenu = [
  {
    id: '2987bf89-0a39-4005-b75d-b612526bbd79',
    label: 'English',
    code: 'en',
  },
  {
    id: '8acc7d82-d909-4232-b40e-400e8875c271',
    label: 'Russian',
    code: 'ru',
  },
  {
    id: '8acc7d82-d909-4232-b40e-400e8875c222',
    label: 'Uzbek',
    code: 'uz',
  },
];
