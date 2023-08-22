import { FC, ReactNode, useMemo, useState } from 'react';
import { THEME, Theme, ThemeContext, ThemeContextProps } from '../../../../shared/config/theme/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/lib/storageKeys';

interface ThemeProviderProps {
    children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const availableThemes: Theme[] = Object.values(THEME);
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    const defaultTheme = availableThemes.includes(storedTheme) ? storedTheme : 'regular';
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme,
    }), [theme]);
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
