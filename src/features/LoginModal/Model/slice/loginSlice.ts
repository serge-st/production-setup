import { createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../interfaces/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
};

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
    },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
