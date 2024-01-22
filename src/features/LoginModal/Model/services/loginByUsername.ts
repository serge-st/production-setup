import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { isAxiosError } from 'axios';
import { UserSchema, userActions } from 'entities/User';
import { LoginByUsernameError } from '../interfaces/ErrorResponseData';
import { USER_ACCESS_TOKEN } from 'shared/lib';

export const loginByUsername = createAsyncThunk<UserSchema, undefined, { rejectValue: LoginByUsernameError }>(
    'login/loginByUsername',
    async (_arg, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI;
        const { login } = getState() as StateSchema;
        const { username, password } = login;

        try {
            const response = await axios.post<UserSchema>('http://localhost:3335/auth/login', { username, password });

            if (!response.data) throw new Error('Unexpected response');

            localStorage.setItem(USER_ACCESS_TOKEN, response.data.access_token);
            dispatch(userActions.setUserData(response.data));
            return response.data;
        } catch (error) {
            if (!isAxiosError(error)) return rejectWithValue(error.message);
            if (Array.isArray(error.response.data.message)) return rejectWithValue(error.response.data.message.join('; '));
            return rejectWithValue(error.response.data.message);
        }
    },
);
