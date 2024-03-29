import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../interfaces/LoginSchema';
import { loginByUsername } from '../services/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        resetError(state) {
            state.error = undefined;
        },
        resetForm(state) {
            state.username = '';
            state.password = '';
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.error = undefined;
                state.isLoading = false;
                state.username = '';
                state.password = '';
            })
            .addCase(loginByUsername.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
