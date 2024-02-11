import { FC, useCallback } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { Modal } from 'shared/UI';
import { loginActions } from '../Model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib';

interface LoginModalProps {
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {isOpened, onClose} = props;
    const dispatch = useAppDispatch();

    const handleClose = useCallback(() => {
        dispatch(loginActions.resetForm());
        onClose();
    }, [dispatch, onClose]);
    
    return (
        <Modal 
            isOpened={isOpened} 
            onClose={handleClose}
        >
            <LoginForm />
        </Modal>
    );
};
