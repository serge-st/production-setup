import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppText.module.scss';

const APP_TEXT_THEME = {
    STANDARD: 'standard',
    INVERSED: 'inversed',
    HIGHLIGHTED: 'highlighted',
    ERROR: 'error',
} as const;

export type AppTextTheme = ObjectValues<typeof APP_TEXT_THEME>;

interface TextProps {
    className?: string;
    theme?: AppTextTheme;
    title?: string;
    body?: string;
    headerType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const AppText: FC<TextProps> = ({className, theme = 'standard', title, body, headerType }) => {
    const Header = headerType || 'h2'; 

    return (
        <section className={classNames(cls.AppText, {}, [className, cls[theme]])}>
            {!!title && <Header className={cls.h2}>{title}</Header>}
            {!!body && <p className={cls.p}>{body}</p>}
        </section>
    );
};
