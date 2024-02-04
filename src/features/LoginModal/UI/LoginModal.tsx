import { forwardRef, useCallback } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { Modal } from 'shared/UI';
import { loginActions } from '../Model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib';

interface LoginModalProps {
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal = forwardRef<HTMLDivElement, LoginModalProps>((props, ref) => {
    const {isOpened, onClose} = props;
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => {
        dispatch(loginActions.resetForm());
        onClose();
    }, [dispatch, onClose]);
    
    return (
        <Modal 
            ref={ref}
            isOpened={isOpened} 
            onClose={handleClose}
        >
            <LoginForm />
        </Modal>
    );
});
