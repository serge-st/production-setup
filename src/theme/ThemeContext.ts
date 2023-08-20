import { createContext } from 'react';

const THEME = {
    REGULAR: 'regular',
    DARK: 'dark',
} as const;

export type Theme = ObjectValues<typeof THEME>;

export interface ThemeContextProps {
    theme?: Theme;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});