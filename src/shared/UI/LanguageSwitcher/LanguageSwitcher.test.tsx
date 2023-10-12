import { render, screen } from '@testing-library/react';
import { LanguageSwitcher } from './LanguageSwitcher';

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        };
    },
}));

describe('Test LanguageSwitcher UI component', () => {
    test('Basic render', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
    });
});
