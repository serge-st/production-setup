import { FC } from 'react';
import Counter from './Components/Counter';
import './index.scss';
import classes from './App.module.scss';
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
            <Counter />
            <button className={classes.btn}>test</button>
            <button className={classes.btn}>test red</button>
            <p className="test">test p should be lime</p>
        </div>
    );
};

export default App;