import { FC, Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import Counter from './Components/Counter';
import { Theme, ThemeContext } from './theme/ThemeContext';


const App: FC = () => {
    console.log(Math.random(), 'Counter Render')
    const {theme, toggleTheme} = useContext(ThemeContext);

    console.log(theme)



    return (
        <div className={`App ${theme}`}>
            <button type="button" onClick={() => toggleTheme()}>Toggle Theme</button><br></br>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

            <Counter />
        </div>
    );
};

export default App;