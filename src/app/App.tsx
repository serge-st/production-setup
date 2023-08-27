import './styles/index.scss';
import { FC } from 'react';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';

export const App: FC = () => {
    const {theme} = useTheme();

    // !! JUST FOR TESTING PURPOSES
    console.log(Math.random(), 'App render')

    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
