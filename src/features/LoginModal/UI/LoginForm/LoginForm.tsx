import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { AppButton } from 'shared/UI';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({className}) => {
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput placeholder={t('Username')} className={cls.input}/>
            <AppInput placeholder={t('Password')} className={cls.input}/>
            <AppButton className={cls['login-button']}>{t('Login')}</AppButton>
        </div>
    );
};
