import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1><span className={cls['highlight-red']}>404</span> {t('Page not found')}</h1>
        </div>
    );
};
