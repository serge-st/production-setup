import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
    } = props;
    
    return (
        <div className={classNames(cls.Modal, {}, [className])}>
            <div className={cls.overlay}>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
