import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppButton.module.scss';

const APP_BUTTON_THEME = {
    CLEAR: 'clear',
} as const

export type AppButtonTheme = ObjectValues<typeof APP_BUTTON_THEME>;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {className, children, theme = 'clear', ...otherProps} = props;
    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
