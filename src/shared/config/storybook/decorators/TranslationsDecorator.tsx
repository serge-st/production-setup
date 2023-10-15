import { StoryFn, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export function TranslationsDecorator() {
    return (Story: StoryFn, context: StoryContext) => {
        const { locale } = context.globals;

        useEffect(() => {
          i18n.changeLanguage(locale);
        }, [locale]);

        return (
            <Suspense fallback={<div>Loading Translations...</div>}>
                <I18nextProvider i18n={i18n}>
                    <Story />
                </I18nextProvider>
            </Suspense>
        )
    }
}