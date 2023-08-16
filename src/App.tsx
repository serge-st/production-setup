import { FC } from 'react';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import { Link } from 'react-router-dom';

const App: FC = () => {
    return (
        <div className='App'>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default App;