import { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppInput.module.scss';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string;
    onChange?: (value: string) => void;
}

export const AppInput: FC<AppInputProps> = (props) => {
    const { onChange, className, type = 'text', ...otherProps } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return ( 
        <input 
            className={classNames(cls.AppInput, {}, [className])}
            type={type}
            {...otherProps}
            onChange={handleChange}
        />
    );
};
