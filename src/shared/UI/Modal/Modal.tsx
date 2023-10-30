import { FC, ReactNode, MouseEventHandler, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';

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

    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        if (onClose) {
            setIsClosing(true);
        }
    };

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    const hadleTransitionEnd = () => {
        if (onClose && isClosing) {
            onClose();
            setIsClosing(false);
        }
    };

    const mods: Mods = {
        [cls.opened]: isOpened,
        [cls.closing]: isClosing,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div 
                    className={cls.content} 
                    onClick={handleContentClick}
                    onTransitionEnd={hadleTransitionEnd}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
