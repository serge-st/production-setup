import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import RightArrow from 'shared/assets/icons/right-arrow.svg';
import { ThemeSwitcher } from 'shared/UI';
import { LanguageSwitcher } from 'shared/UI';

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
                <button
                    className={cls['arrow-button']}
                    onClick={handleClick}
                    type='button'
                >
                    <RightArrow />
                </button>
            </div>
            <div className={cls['switcher-container']}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </aside>
    );
};
