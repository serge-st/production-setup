import { FC, Suspense, useCallback } from 'react';
import { classNames } from 'shared/lib';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from './LoginForm/LoginFormAsync';
import { Loader, Modal } from 'shared/UI';
import { loginActions } from '../Model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib';


interface LoginModalProps {
    isOpened: boolean;
    onClose: () => void;
}

const LoadingPlaceholder = () => {
    return (
        <div className={classNames(cls['modal-size'], {}, [cls.center])}>
            <Loader />
        </div>
    );
};

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
            <Suspense fallback={<LoadingPlaceholder />}>
                <LoginFormAsync className={cls['modal-size']} />
            </Suspense>
        </Modal>
    );
};
