import { FC } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { AppButton } from '../AppButton/AppButton';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/Moon.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <AppButton 
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            type='button'
            onClick={() => toggleTheme()}
        >
            <div className={classNames(cls['theme-icon-container'], {}, [cls[theme]])}>
                {theme === 'regular'
                    ? <MoonIcon />
                    : <SunIcon />
                }
            </div>
        </AppButton>
    );
};
