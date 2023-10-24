import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
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
        <button 
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={toggleLanguage}
            type='button'
            data-testid='language-switcher'
        >
            {t('Language toggle text')}
        </button>
    );
};
