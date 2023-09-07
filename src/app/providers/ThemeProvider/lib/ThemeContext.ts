import { createContext } from 'react';

export const THEME = {
    REGULAR: 'regular',
    DARK: 'dark',
} as const;

export type Theme = ObjectValues<typeof THEME>;

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
