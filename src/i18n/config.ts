import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh_tw from './zh_TW.json';

export const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh_tw,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});
