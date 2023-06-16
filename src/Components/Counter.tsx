import { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button className={classes.btn} onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;