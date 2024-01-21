import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginState } from '../../Model/selectors/getLoginState';
import { loginActions } from '../../Model/slice/loginSlice';
import { loginByUsername } from 'features/LoginModal/Model/services/loginByUsername';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useAppDispatch();
    const isFormEmpty = !username || !password;
    
    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleClick = useCallback(() => {
        dispatch(loginByUsername());
    }, [dispatch]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {!!error && <div>{error}</div>}
            <AppInput 
                placeholder={t('Username')} 
                className={cls.input}
                value={username}
                onChange={onUsernameChange}
            />
            <AppInput 
                type="password" 
                placeholder={t('Password')} 
                className={cls.input}
                value={password}
                onChange={onPasswordChange}
            />
            <AppButton 
                className={cls['login-button']}
                onClick={handleClick}
                disabled={isFormEmpty || isLoading}
            >{t('Login')}</AppButton>
        </div>
    );
});
