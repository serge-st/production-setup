import { AnyAction, Dispatch, ThunkDispatch, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../interfaces/LoginSchema';
import axios from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};


export type AppDispatch = ThunkDispatch<StateSchema, undefined, AnyAction> & Dispatch<AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch;

export const authenticate = createAsyncThunk(
    'login/authenticate',
    async (_arg, { getState }) => {
        const { login } = getState() as StateSchema;
        const { username, password } = login;
        console.log(login);

        try {
            const response = await axios.post('http://localhost:3335/auth/login', { username, password });
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw new Error('something went wrong');
        }
    },
);

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
    extraReducers: (builder) => {
        builder
            .addCase(authenticate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authenticate.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                console.log('payload in reducer', payload);
            })
            .addCase(authenticate.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Error';
            });
    },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
