import { FC } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { AppButton } from '../AppButton/AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [cls[theme], className])}
            theme={'simple'}
            onClick={toggleTheme}
        >
            <div className={classNames(cls['theme-icon-container'], {}, [])}>
                {theme === 'regular-theme'
                    ? <MoonIcon />
                    : <SunIcon />
                }
            </div>
        </AppButton>
    );
};
