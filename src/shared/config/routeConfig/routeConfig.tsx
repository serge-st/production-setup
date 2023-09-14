import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

type Route = ObjectValues<typeof ROUTE>

const ROUTE = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'notFound',
} as const;

const appRoutes: Record<Route, string> = {
    main: '/',
    about: '/about',
    notFound: '*',
};

export const routeConfig: RouteProps[] = [
    { path: appRoutes.main, element: <MainPage /> },
    { path: appRoutes.about, element: <AboutPage /> },
    { path: appRoutes.notFound, element: <NotFoundPage /> },
];
