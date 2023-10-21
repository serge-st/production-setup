import fs from 'fs';
import path from 'path';
import { Resource, ResourceKey } from 'i18next';

const getJSONData = (filePath: string): ResourceKey => {
    try {
        const data = fs.readFileSync(filePath, { encoding: 'utf8' });
        return JSON.parse(data) as ResourceKey;
    } catch (err) {
        throw new Error(`Error in getResources() -> getJSONData(): ${err}`);
    }
};

export const getResources = (): Resource => {
    const resources: Resource = {};
    const localesDir = path.resolve(__dirname, '..', '..', '..', '..', 'public', 'locales');

    fs.readdirSync(localesDir).forEach((languageKey) => {
        const currentLanguageDir = path.resolve(localesDir, languageKey);

        const mainTranslationFile = path.resolve(currentLanguageDir, 'translation.json');
        const translation = getJSONData(mainTranslationFile);
        resources[languageKey] = {
            translation,
        };

        const currentPagesDir = path.resolve(currentLanguageDir, 'pages');
        fs.readdirSync(currentPagesDir).forEach((page) => {
            const file = path.resolve(currentPagesDir, page);
            const key = `pages/${path.parse(page).name}`;
            const data = getJSONData(file);
            resources[languageKey][key] = data;
        });
    });

    return resources;
};
