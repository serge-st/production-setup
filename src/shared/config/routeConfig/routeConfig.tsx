import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

type Route = ObjectValues<typeof ROUTE>

const ROUTE = {
    MAIN: 'main',
    ABOUT: 'about',
} as const;

const appRoutes: Record<Route, string> = {
    main: '/',
    about: '/about',
};

export const routeConfig: RouteProps[] = [
    { path: appRoutes.main, element: <MainPage /> },
    { path: appRoutes.about, element: <AboutPage /> },
];
