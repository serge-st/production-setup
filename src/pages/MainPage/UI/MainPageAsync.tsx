import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(() => {
    return new Promise(res => {
        setTimeout(() => {
            // @ts-expect-error: for testing purposes
            return res(import('./MainPage'));
        }, 1000);
    });
});
