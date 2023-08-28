import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Sidebar.module.scss';
import { AppButton } from 'shared/UI/AppButton/AppButton';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const handleClick = () => {
        console.log('click');
    }

    return (
        <aside className={classNames(cls.Sidebar, {}, [className])}>
            <AppButton onClick={handleClick} type='button' theme={'clear-inversed'}>Toggle Sidebar</AppButton>
        </aside>
    );
};
