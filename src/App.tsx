import { FC } from 'react';
import Counter from './Components/Counter';
import './index.scss';
import classes from './App.module.scss';

const App: FC = () => {
    return (
        <div className='App'>
            <Counter />
            <button className={classes.btn}>test</button>
            <button className={classes.btn}>test red</button>
            <p className="test">test p should be lime</p>
        </div>
    );
};

export default App;