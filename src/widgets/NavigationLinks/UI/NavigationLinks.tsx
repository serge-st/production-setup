import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './NavigationLinks.module.scss';
import { routeConfig } from 'shared/config/routeConfig';
import { AppLink } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const LINK_ORIENTATION = {
    ROW: 'row',
    COLUMN: 'column',
} as const;

export type LinkOrientation = ObjectValues<typeof LINK_ORIENTATION>;

interface NavigationLinksProps {
    className?: string;
    orientation?: LinkOrientation;
}

export const NavigationLinks: FC<NavigationLinksProps> = ({className, orientation = 'row'}) => {
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
        <div className={classNames(cls.NavigationLinks, {}, [cls[orientation], className])}>
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
    );
};
