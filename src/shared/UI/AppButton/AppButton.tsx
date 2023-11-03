import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppButton.module.scss';

const APP_BUTTON_THEME = {
    CLEAR: 'clear',
    CLEAR_INVERSED: 'clear-inversed',
    SIMPLE: 'simple',
} as const;

export type AppButtonTheme = ObjectValues<typeof APP_BUTTON_THEME>;

const APP_BUTTON_SIZE = {
    MEDIUM: 'medium',
    LARGE: 'large',
} as const;

export type AppButtonSize = ObjectValues<typeof APP_BUTTON_SIZE>;

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme;
    size?: AppButtonSize;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {className, children, theme = 'clear', type = 'button', size = 'medium', disabled, ...otherProps} = props;

    return (
        <button
            className={classNames(cls.AppButton, {[cls.disabled]: disabled}, [className, cls[theme], cls[size]])}
            type={type}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
