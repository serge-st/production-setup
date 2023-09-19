import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));
export const MainPageAsync = lazy(() => {
    return new Promise(res => {
        setTimeout(() => {
            // @ts-expect-error: for testing purposes TODO: remove this later
            return res(import('./MainPage'));
        }, 1000);
    });
});
