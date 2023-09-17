import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/UI';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
