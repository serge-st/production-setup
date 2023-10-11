import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: __IS_DEV__ ? true : false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
