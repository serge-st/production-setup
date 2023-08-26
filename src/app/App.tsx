import './styles/index.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/AppRouter';
import { classNames, useTheme } from 'shared/lib';

export const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    // !! JUST FOR TESTING PURPOSES
    console.log(Math.random(), 'App render')

    return (
        <div className={classNames('App', {}, [theme])}>
            <button type="button" onClick={() => toggleTheme()}>Toggle Theme</button><br></br>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <AppRouter />
        </div>
    );
};
