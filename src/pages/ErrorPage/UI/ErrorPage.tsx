import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({className}) => {
    const { t } = useTranslation();
    const handleClick = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <h1 className={cls.title}>{t('Page Error')}</h1>
            <button
                className={cls.button}
                onClick={handleClick}
                type='button'
            >
                {t('Reload Page')}
            </button>
        </div>
    );
};
