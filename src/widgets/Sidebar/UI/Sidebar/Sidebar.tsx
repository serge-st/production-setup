import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { AppButton } from 'shared/UI/AppButton/AppButton';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [isClosed, setIsClosed] = useState(true);

    const handleClick = () => {
        setIsClosed(state => !state);
    }

    return (
        <aside className={classNames(cls.Sidebar, {[cls.collapsed]: isClosed}, [className])}>
            <AppButton onClick={handleClick} type='button' theme={'clear-inversed'}>Toggle Sidebar {String(isClosed)}</AppButton>
        </aside>
    );
};
