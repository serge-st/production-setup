import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { NavigationLinks } from 'widgets/NavigationLinks';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <NavigationLinks />
        </nav>
    );
};
