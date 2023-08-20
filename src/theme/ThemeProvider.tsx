import { FC, ReactNode, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme>('regular');

    const toggleTheme = () => {
        setTheme(theme === 'regular' ? 'dark' : 'regular');
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;