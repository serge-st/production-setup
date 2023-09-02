import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/UI';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'}>{t('Nav main page name')}</AppLink>
                <AppLink to={'/about'}>{t('Nav about page name')}</AppLink>
            </div>
        </nav>
    );
};
