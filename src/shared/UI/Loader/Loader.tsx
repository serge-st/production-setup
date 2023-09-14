import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <span className={classNames(cls.Loader, {}, [className])}>

        </span>
    );
};
