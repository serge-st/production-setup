import { FC, ReactNode, MouseEventHandler } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpened: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpened,
        onClose,
    } = props;

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.Modal, {[cls.opened]: isOpened}, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content} onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
