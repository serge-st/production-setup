import { useContext } from 'react';
import { Theme, ThemeContext } from 'app/providers/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'regular' ? 'dark' : 'regular';
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    const setThemeWithStorage = (themeName: Theme) => {
        setTheme(themeName);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
    };

    return {
        theme,
        toggleTheme,
        setTheme: setThemeWithStorage,
    };
};
