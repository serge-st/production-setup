import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI';

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
            <AppButton
                className={cls.button}
                onClick={handleClick}
            >
                {t('Reload Page')}
            </AppButton>
        </div>
    );
};
