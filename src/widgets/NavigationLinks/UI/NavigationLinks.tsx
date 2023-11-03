import { FC, useEffect, useState, TransitionEvent } from 'react';
import { classNames } from 'shared/lib';
import cls from './NavigationLinks.module.scss';
import { routeConfig } from 'shared/config/routeConfig';
import { AppLink } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const LINK_STYLE = {
    REGULAR: 'regular',
    NARROW: 'narrow',
} as const;

export type LinkStyle = ObjectValues<typeof LINK_STYLE>;

interface NavigationLinksProps {
    className?: string;
    style?: LinkStyle;
    showIcons?: boolean;
}

export const NavigationLinks: FC<NavigationLinksProps> = ({className, style = 'regular', showIcons = true}) => {
    const { t } = useTranslation();
    const location = useLocation();
    const [activePath, setActivePath] = useState<string | null>(null);
    const [showText, setShowText] = useState<boolean>(style === 'regular');
    const appRoutes = routeConfig.filter(({path}) => path !== '*');

    const handleClick = (path: string): void => {
        setActivePath(path);
    };

    useEffect(() => {
        setActivePath(location.pathname);
    }, [activePath, location.pathname]);

    useEffect(() => {
        if (style === 'regular') {
            setShowText(true);
        }
    }, [style]);

    const handleTransitionEnd = (e: TransitionEvent<HTMLElement>) => {
        if (e.propertyName === 'opacity' && style === 'narrow') {
            setShowText(false);
        }
    };

    return (
        <nav className={classNames(cls.NavigationLinks, {}, [cls[style], className])}>
            <ul className={cls['links-container']}>
                {appRoutes.map(({path, icon, translationKey}) => {
                    return (
                        <li key={path} className={cls['link-wrapper']}>
                            {(showIcons || style === 'narrow') && (<AppLink
                                to={path} 
                                onClick={() => handleClick(path)}
                                theme='clear-inversed'
                                className={cls['icon-link']}
                            >
                                <span className={cls['icon-container']}>
                                    {icon}
                                </span>
                            </AppLink>)}
                            <AppLink
                                to={path} 
                                onClick={() => handleClick(path)}
                                theme={activePath === path ? 'clear-inversed-underlined' : 'clear-inversed'}
                                className={classNames(cls['text-link'], {}, [!showText && cls['hidden']])}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {t(translationKey)}
                            </AppLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
