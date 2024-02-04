import { ReactNode, MouseEventHandler, useState, useEffect, useCallback, forwardRef } from 'react';
import { classNames, useTheme } from 'shared/lib';
import cls from './Modal.module.scss';
import { Mods } from 'shared/lib/classNames/classNames';
import { AppCloseButton, Portal } from 'shared/UI';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpened: boolean;
    onClose: () => void;
}

type BodyScroll = 'disabled' | 'default';
const setBodyScroll = (bodyScrollType: BodyScroll) => {
    switch (bodyScrollType) {
    case 'disabled': {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        break;
    }
    case 'default': {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        break;
    }
    }
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
    const {
        className,
        children,
        isOpened,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
        }
    }, [onClose]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', handleKeyDown);
            setBodyScroll('disabled');
        } else {
            setBodyScroll('default');
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            setBodyScroll('default');
        };
    }, [isOpened, handleKeyDown]);

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    const handleTransitionEnd = useCallback(() => {
        if (onClose && isClosing) {
            onClose();
            setIsClosing(false);
        }
    }, [onClose, isClosing]);

    const mods: Mods = {
        [cls.opened]: isOpened,
        [cls.closing]: isClosing,
    };

    if (!isOpened) return null;
    return (
        <Portal>
            <div ref={ref} className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div 
                        className={`app-modal-content ${cls.content}`} 
                        onClick={handleContentClick}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        <AppCloseButton onClick={handleClose} className={cls['close-button']}/>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
});
