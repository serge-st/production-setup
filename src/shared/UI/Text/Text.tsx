import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    body?: string;
    headerType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Text: FC<TextProps> = ({className, title, body, headerType}) => {
    const Header = headerType || 'h2'; 

    return (
        <section className={classNames(cls.Text, {}, [className])}>
            {!!title && <Header className={cls.h2}>{title}</Header>}
            {!!body && <p className={cls.p}>{body}</p>}
        </section>
    );
};
