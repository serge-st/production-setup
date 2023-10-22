import { Compilation, Compiler } from 'webpack';
import { Resource, ResourceKey } from 'i18next';
import fs from 'fs';
import path from 'path';

class ExtractTranslations {
    private getJSONData = (filePath: string): ResourceKey => {
        try {
            const data = fs.readFileSync(filePath, { encoding: 'utf8' });
            return JSON.parse(data) as ResourceKey;
        } catch (err) {
            throw new Error(`Error in ExtractTranslations.getJSONData(): ${err}`);
        }
    };

    private fileDependencies = new Set<string>();

    private getResources = (): Resource => {
        const resources: Resource = {};
        // path where translations are stored
        const localesDir = path.resolve(__dirname, '..', '..', '..', 'public', 'locales');

        if (!fs.existsSync(localesDir)) throw new Error(`${localesDir} does not exist`);

        try {
            // locale folders (en, ru)
            fs.readdirSync(localesDir).forEach((languageKey) => {
                const currentLanguageDir = path.resolve(localesDir, languageKey);
                if (!fs.existsSync(currentLanguageDir)) throw new Error(`${currentLanguageDir} does not exist`);

                const mainTranslationFile = path.resolve(currentLanguageDir, 'translation.json');
                // add file to Webpack watch list
                this.fileDependencies.add(mainTranslationFile);
                const translation = this.getJSONData(mainTranslationFile);
                resources[languageKey] = {
                    translation,
                };

                // page translations directory
                const currentPagesDir = path.resolve(currentLanguageDir, 'pages');
                if (!fs.existsSync(currentPagesDir)) throw new Error(`${currentPagesDir} does not exist`);

                // iterate over each page translation file
                fs.readdirSync(currentPagesDir).forEach((page) => {
                    const file = path.resolve(currentPagesDir, page);
                    // add file to Webpack watch list
                    this.fileDependencies.add(file);
                    const key = `pages/${path.parse(page).name}`;
                    const data = this.getJSONData(file);
                    resources[languageKey][key] = data;
                });
            });

        } catch (err) {
            throw new Error(`Error reading directories in ExtractTranslations.getResources(): ${err}`);
        }

        return resources;
    };

    private writeResources = (resources: Resource): void => {
        try {
            const file = path.resolve(__dirname, '..', 'translations.json');
            const content = JSON.stringify(resources, null, 4);

            if (!fs.existsSync(file) || fs.readFileSync(file, { encoding: 'utf8' }) !== content) {
                fs.writeFileSync(file, content);
            }
        } catch (err) {
            console.error(err);
        }
    }

    private isInitialLaunch = true;

    apply(compiler: Compiler) {
        // to prevent crashes in case '../translations.json' doesn't exist on initial launch of storybook
        compiler.hooks.environment.tap('ExtractTranslations', () => {
            if (this.isInitialLaunch) {
                this.writeResources(this.getResources());

                this.isInitialLaunch = false;
            }
        });

        // to ensure original translation files are watched by Webpack
        compiler.hooks.thisCompilation.tap('ExtractTranslations', (compilation: Compilation) => {
            for (const file of this.fileDependencies) {
                compilation.fileDependencies.add(file);
            }
        });

        // to ensure on every save translations are re-checked and updated
        compiler.hooks.done.tap('ExtractTranslations', () => {
            if (!this.isInitialLaunch) {
                this.writeResources(this.getResources());
            }
        });
    }
}

export default ExtractTranslations;
