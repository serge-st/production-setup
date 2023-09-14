import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({path, element}) => {
                    return <Route key={path} path={path} element={<main className='page-wrapper'>{element}</main>} />;
                })}
            </Routes>
        </Suspense>
    );
};
