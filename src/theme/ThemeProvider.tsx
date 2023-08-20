import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext, ThemeContextProps } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from './storageKeys';

interface ThemeProviderProps {
    children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const defaultTheme: Theme =  localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'regular';
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

export default ThemeProvider;