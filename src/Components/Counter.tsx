import { useState } from 'react';
import './Counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;