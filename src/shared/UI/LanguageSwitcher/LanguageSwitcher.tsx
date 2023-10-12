import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const lng = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(lng);
    };
    
    return (
        <AppButton 
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            theme='clear-inversed'
            onClick={toggleLanguage}
            data-testid='language-switcher'
        >
            {t('Language toggle text')}
        </AppButton>
    );
};
