import { FC, ReactNode, MouseEventHandler, useRef, useState, useEffect } from 'react';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpened: boolean;
    onClose: () => void;
}

const ANIMATION_DURATION = 180;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpened,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timoutRef = useRef<ReturnType<typeof setTimeout>>();

    const handleClose = () => {
        if (onClose) {
            setIsClosing(true);
            timoutRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DURATION);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeout(timoutRef.current);
        };
    }, []);

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    getComputedStyle(document.documentElement).getPropertyValue('--my-variable-name');

    const mods: Mods = {
        [cls.opened]: isOpened,
        [cls.closing]: isClosing,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content} onClick={handleContentClick}>
                    
                    {children}
                </div>
            </div>
        </div>
    );
};
