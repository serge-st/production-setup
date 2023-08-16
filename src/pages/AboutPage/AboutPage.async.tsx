import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'));

// export const AboutPageAsync = lazy(() => {
//     return setTimeout(() =>  import('./AboutPage'),1500);
// });
