import './styles/index.scss';
import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { classNames, useTheme } from 'shared/lib';

const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    // !! JUST FOR TESTING PURPOSES
    console.log(Math.random(), 'App render')

    return (
        <div className={classNames('App', {}, [theme])}>
            <button type="button" onClick={() => toggleTheme()}>Toggle Theme</button><br></br>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;