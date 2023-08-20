import { FC, Suspense, useState } from 'react';
import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';

const THEME = {
	REGULAR: 'regular',
	DARK: 'dark',
} as const;

type ObjectValues<T> = T[keyof T];
type Theme = ObjectValues<typeof THEME>;

const App: FC = () => {
    const [theme, setTheme] = useState<Theme>('regular');

    const handleClick = () => {
        setTheme(theme === 'regular' ? 'dark' : 'regular');
    }

    return (
        <div className={`App ${theme}`}>
            <button type="button" onClick={handleClick}>Toggle Theme</button><br></br>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;