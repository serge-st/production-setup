import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    body?: string;
}

export const Text: FC<TextProps> = ({className, title, body}) => {
    return (
        <section className={classNames(cls.Text, {}, [className])}>
            {!!title && <h2 className={cls.h2}>{title}</h2>}
            {!!body && <p className={cls.p}>{body}</p>}
        </section>
    );
};
