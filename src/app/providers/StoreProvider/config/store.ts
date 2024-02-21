import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './createReducerManager';

interface StoreWithReducerManager extends ReturnType<typeof configureStore<StateSchema>> {
    reducerManager?: ReturnType<typeof createReducerManager>;
}

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        userData: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store: StoreWithReducerManager = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    store.reducerManager = reducerManager;

    return store;
};


export type AppStore = ReturnType<typeof createReduxStore>;
