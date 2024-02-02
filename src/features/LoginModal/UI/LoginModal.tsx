import { FC } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { Modal } from 'shared/UI';
import { loginActions } from '../Model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib';

interface LoginModalProps {
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({isOpened, onClose }) => {
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(loginActions.resetForm());
        onClose();
    };
    
    return (
        <Modal 
            isOpened={isOpened} 
            onClose={handleClose}
        >
            <LoginForm />
        </Modal>
    );
};
