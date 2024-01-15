import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Header.module.scss';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/LoginModal';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className}) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppButton theme={'clear-inversed'} onClick={() => setIsAuthModalOpen(true)}>{t('Login')}</AppButton>

            <LoginModal isOpened={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </header>
    );
};
