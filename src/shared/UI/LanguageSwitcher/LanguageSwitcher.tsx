import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../AppButton/AppButton';

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
            onClick={toggleLanguage}
            theme={'simple'}
            data-testid='language-switcher'
        >
            {t('Language toggle text')}
        </AppButton>
    );
};
