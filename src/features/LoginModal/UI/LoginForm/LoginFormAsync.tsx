import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./MainPage'));
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => {
    return new Promise(res => {
        setTimeout(() => {
            // TODO: remove this later
            return res(import('./LoginForm'));
        }, 0);
    });
});
