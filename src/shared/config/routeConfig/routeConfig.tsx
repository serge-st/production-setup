import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

const ROUTE = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'notFound',
} as const;

type Route = ObjectValues<typeof ROUTE>

const appRoutes: Record<Route, string> = {
    main: '/',
    about: '/about',
    notFound: '*',
};

type AppRoute = {
    icon?: JSX.Element,
    translationKey?: string,
}

type AppRouteProps = RouteProps & AppRoute;

// TODO: pass icons and translation keys to routeConfig
export const routeConfig: AppRouteProps[] = [
    { path: appRoutes.main, element: <MainPage /> },
    { path: appRoutes.about, element: <AboutPage /> },
    { path: appRoutes.notFound, element: <NotFoundPage /> },
];
