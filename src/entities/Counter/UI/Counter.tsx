/* eslint-disable i18next/no-literal-string */
// TODO: remove this component after tests are done
import { FC } from 'react';
import { AppButton } from 'shared/UI';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Model/slice/counterSlice';
import { getCounter } from '../Model/selectors/getCounter';

export const Counter: FC = () => {
    const { value } = useSelector(getCounter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>Value: {value}</h1>
            <div style={{display: 'flex', gap: '8px'}}>
                <AppButton onClick={increment}>Increment</AppButton>
                <AppButton onClick={decrement}>Decrement</AppButton>
            </div>
        </div>
    );
};
