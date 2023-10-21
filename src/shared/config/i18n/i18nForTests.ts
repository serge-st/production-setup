import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../../../public/locales/en/translation.json';
import ruTranslation from '../../../../public/locales/ru/translation.json';
import enAbout from '../../../../public/locales/en/pages/about.json';
import ruAbout from '../../../../public/locales/ru/pages/about.json';
import enMain from '../../../../public/locales/en/pages/main.json';
import ruMain from '../../../../public/locales/ru/pages/main.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: enTranslation,
                'pages/about': enAbout,
                'pages/main': enMain,
            },
            ru: {
                translation: ruTranslation,
                'pages/about': ruAbout,
                'pages/main': ruMain,
            },
        },
    });

export default i18n;
