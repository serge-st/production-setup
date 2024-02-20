import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';
import { useAppStore } from './useAppStore';
import { StateSchemaKey } from 'app/providers/StoreProvider';

export const useAsyncReducer = (name: StateSchemaKey, reducer: Reducer) => {
    const store = useAppStore();
    const dispatch = useAppDispatch();

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name}` });

        return () => {
            store.reducerManager.remove(name);
            dispatch({ type: `@REMOVE ${name}` });
        };
    }, [dispatch, name, reducer, store.reducerManager]);
};
