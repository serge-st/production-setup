import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import RightArrow from 'shared/assets/icons/right-arrow.svg';
import { AppButton, ThemeSwitcher } from 'shared/UI';
import { LanguageSwitcher } from 'shared/UI';
import { NavigationLinks } from 'widgets/NavigationLinks';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [isClosed, setIsClosed] = useState(true);

    const handleClick = () => {
        setIsClosed(state => !state);
    };

    return (
        <aside 
            className={classNames(cls.Sidebar, {[cls.collapsed]: isClosed}, [className])}
            data-testid='sidebar'
        >
            <div className={cls['sidebar-toggle-container']}>
                <AppButton
                    className={cls['arrow-button']}
                    onClick={handleClick}
                    theme='simple'
                >
                    <RightArrow />
                </AppButton>
            </div>
            <div className={cls['main-content-container']}>
                <NavigationLinks
                    style={isClosed ? 'narrow' : 'regular'}
                />
            </div>
            <div className={cls['switcher-container']}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </aside>
    );
};
