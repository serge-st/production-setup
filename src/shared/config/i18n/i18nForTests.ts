import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// translations are retrieved automatically by ExtractTranslations plugin
import translations from '../../../../config/.storybook/translations.json';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: translations,
    });

export default i18n;
