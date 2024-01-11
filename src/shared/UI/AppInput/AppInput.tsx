import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
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
}

export const AppInput: FC<AppInputProps> = (props) => {
    const { onChange, className, type = 'text', theme = 'clear', ...otherProps } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return ( 
        <input 
            className={classNames(cls.AppInput, {}, [className, cls[theme]])}
            type={type}
            {...otherProps}
            onChange={handleChange}
        />
    );
};
