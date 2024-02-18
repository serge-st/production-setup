import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { AppButton, AppText } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib';
import { getLoginState } from '../../Model/selectors/getLoginState';
import { loginActions } from '../../Model/slice/loginSlice';
import { loginByUsername } from '../../Model/services/loginByUsername';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(function LoginForm({ className }: LoginFormProps) {
    const { t } = useTranslation();
    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useAppDispatch();
    const isFormEmpty = !username || !password;

    const processError = useCallback(() => {
        if (!error) return;
        return error === '401' ? t('Error-401') : error;
    }, [error, t]);
    
    const onUsernameChange = useCallback((value: string) => {
        if (error) dispatch(loginActions.resetError());
        dispatch(loginActions.setUsername(value));
    }, [dispatch, error]);

    const onPasswordChange = useCallback((value: string) => {
        if (error) dispatch(loginActions.resetError());
        dispatch(loginActions.setPassword(value));
    }, [dispatch, error]);

    const handleClick = useCallback(() => {
        dispatch(loginByUsername());
    }, [dispatch]);

    const handleEnter = useCallback((e: KeyboardEvent) => {
        if (isFormEmpty) return;
        if (e.key === 'Enter') handleClick();
    }, [handleClick, isFormEmpty]);

    useEffect(() => {
        window.addEventListener('keydown', handleEnter);

        return () => window.removeEventListener('keydown', handleEnter);
    }, [handleEnter]);


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppText className={cls.error} body={error && processError()} theme='error' />
            <AppInput 
                placeholder={t('Username')} 
                className={cls.input}
                value={username}
                onChange={onUsernameChange}
                hasError={!!error}
                isReadOnly={isLoading}
            />
            <AppInput 
                type="password" 
                placeholder={t('Password')} 
                className={cls.input}
                value={password}
                onChange={onPasswordChange}
                hasError={!!error}
                isReadOnly={isLoading}
            />
            <AppButton 
                className={cls['login-button']}
                onClick={handleClick}
                disabled={isFormEmpty || isLoading}
            >{t('Login')}</AppButton>
        </div>
    );
});

export default LoginForm;
