import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from 'features/LoginModal/Model/selectors/getLoginData';
import { loginActions } from 'features/LoginModal/Model/slice/loginSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const { username, password } = useSelector(getLoginData);
    const dispatch = useDispatch();
    
    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
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
                onClick={() => console.log({ username, password })}
            >{t('Login')}</AppButton>
        </div>
    );
});
