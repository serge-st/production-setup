import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [activePath, setActivePath] = useState<string | null>(null);
    const appRoutes = routeConfig.filter(({path}) => path !== '*');

    const handleClick = (path: string): void => {
        setActivePath(path);
    };

    useEffect(() => {
        setActivePath(location.pathname);
    }, [activePath]);

    return (
        <nav className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {appRoutes.map(({path}) => {
                    const name = `Nav route name ${path}`;

                    return (
                        <AppLink 
                            key={path} 
                            to={path} 
                            onClick={() => handleClick(path)}
                            theme={activePath === path ? 'clear-inversed-underlined' : 'clear-inversed'}
                        >
                            {t(name)}
                        </AppLink>
                    );
                })}
            </div>
        </nav>
    );
};
