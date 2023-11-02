import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppCloseButton.module.scss';
import CrossIcon from 'shared/assets/icons/cross-small.svg';

interface AppCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const AppCloseButton: FC<AppCloseButtonProps> = (props) => {
    const { className, ...otherProps } = props;

    return (
        <button
            className={classNames(cls.AppCloseButton, {}, [className])}
            type='button'
            {...otherProps}
        >
            <CrossIcon />
        </button>
    );
};
