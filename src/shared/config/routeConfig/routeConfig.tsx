import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import HomeIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';

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

export const routeConfig: AppRouteProps[] = [
    { path: appRoutes.main, element: <MainPage />, icon: <HomeIcon />, translationKey: 'Nav route name /'},
    { path: appRoutes.about, element: <AboutPage />, icon: <InfoIcon />, translationKey: 'Nav route name /about'},
    { path: appRoutes.notFound, element: <NotFoundPage /> },
];
