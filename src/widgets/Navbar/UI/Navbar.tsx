import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/UI';
import { ThemeSwitcher } from 'shared/UI/ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to={'/'}>Main Page</AppLink>
                <AppLink to={'/about'}>About Page</AppLink>
            </div>
        </nav>
    );
};