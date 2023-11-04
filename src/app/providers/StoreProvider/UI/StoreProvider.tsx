import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
}

const store = createStore();

export const StoreProvider: FC<StoreProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
