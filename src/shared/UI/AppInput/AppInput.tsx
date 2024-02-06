import { FC, InputHTMLAttributes } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './AppInput.module.scss';

const APP_INPUT_THEME = {
    CLEAR: 'clear',
    CLEAR_INVERSED: 'clear-inversed',
} as const;

type AppInputTheme = ObjectValues<typeof APP_INPUT_THEME>;

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string;
    onChange?: (value: string) => void;
    theme?: AppInputTheme;
    hasError?: boolean;
    isReadOnly?: boolean;
}

export const AppInput: FC<AppInputProps> = (props) => {
    const { onChange, className, type = 'text', theme = 'clear', hasError, isReadOnly, ...otherProps } = props;
    const { theme: appTheme } = useTheme();
    const isDarkTheme = appTheme === 'dark-theme';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return ( 
        <input 
            className={classNames(cls.AppInput, {[cls.error]: hasError, [cls.dark]: isDarkTheme, [cls['read-only']]: isReadOnly }, [className, cls[theme]])}
            type={type}
            readOnly={isReadOnly}
            {...otherProps}
            onChange={handleChange}
        />
    );
};
