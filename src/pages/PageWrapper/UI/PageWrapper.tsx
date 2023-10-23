import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './PageWrapper.module.scss';

interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const PageWrapper: FC<PageWrapperProps> = (props) => {
    const { className, children, ...misc } = props;
    return (
        <main className={classNames(cls.PageWrapper, {}, [className])} {...misc}>
            {children}
        </main>
    );
};
