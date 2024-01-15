import { FC } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { Modal } from 'shared/UI';

interface LoginModalProps {
    isOpened: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({isOpened, onClose }) => {
    return (
        <Modal 
            isOpened={isOpened} 
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};
