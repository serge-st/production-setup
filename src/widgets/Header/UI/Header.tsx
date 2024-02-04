import { FC, useCallback, useState } from 'react';
import { classNames, useAppDispatch } from 'shared/lib';
import cls from './Header.module.scss';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/LoginModal';
import { getUserData, logoutUser } from 'entities/User';
import { useSelector } from 'react-redux';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className}) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData);

    const handleLogout = useCallback(() => {
        setIsAuthModalOpen(false);
        dispatch(logoutUser());
    }, [dispatch]);

    if (userData.access_token) {
        return (
            <header className={classNames(cls.Header, {}, [className])}>
                <AppButton 
                    theme={'clear-inversed'} 
                    onClick={handleLogout}
                >{t('Logout')}</AppButton>
            </header>
        );
    } 
    // TODO: fix unmount animation
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <AppButton theme={'clear-inversed'} onClick={() => setIsAuthModalOpen(true)}>{t('Login')}</AppButton>
    
            <LoginModal isOpened={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </header>
    );
    
};
