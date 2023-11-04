import { configureStore } from '@reduxjs/toolkit';

export const createStore = () => {
    return configureStore({
        reducer: {},
        devTools: __IS_DEV__,
    });
};
