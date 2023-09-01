import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback='Loading...'>
            <Routes>
                {routeConfig.map(({path, element}) => {
                    return <Route key={path} path={path} element={<main className='page-wrapper'>{element}</main>} />
                })}
            </Routes>
        </Suspense>
    );
};
