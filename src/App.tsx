import { FC } from 'react';
import Counter from './Components/Counter';
import './index.scss';

const App: FC = () => {
    return (
        <div className='App'>
            <Counter />
        </div>
    );
};

export default App;