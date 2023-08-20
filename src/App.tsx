import './styles/index.scss';
import { FC, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import Counter from './Components/Counter';
import { useToggleTheme } from './theme/useToggleTheme';


const App: FC = () => {
    const {theme, toggleTheme} = useToggleTheme();

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