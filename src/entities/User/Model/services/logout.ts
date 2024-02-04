import { USER_ACCESS_TOKEN } from 'shared/lib';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logout = createAsyncThunk<void, undefined, { rejectValue: string }>(
    'user/logout',
    async (_arg, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const userData = localStorage.getItem(USER_ACCESS_TOKEN);
            if (userData) {
                const { access_token } = JSON.parse(userData);
                await axios.post('http://localhost:3335/auth/logout', {}, { headers: { Authorization: `Bearer ${access_token}` } });
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// export const loginByUsername = createAsyncThunk<UserSchema, undefined, { rejectValue: LoginByUsernameError }>(
//     'login/loginByUsername',
//     async (_arg, thunkAPI) => {
//         const { getState, rejectWithValue, dispatch } = thunkAPI;
//         const { login } = getState() as StateSchema;
//         const { username, password } = login;

//         try {
//             const response = await axios.post<UserSchema>('http://localhost:3335/auth/login', { username, password });

//             if (!response.data) throw new Error('Unexpected response');

//             localStorage.setItem(USER_ACCESS_TOKEN, JSON.stringify(response.data));
//             dispatch(userActions.setUserData(response.data));
//             return response.data;
//         } catch (error) {
//             if (!isAxiosError(error)) return rejectWithValue(error.message);
//             if (Array.isArray(error.response.data.message)) return rejectWithValue(error.response.data.message.join('; '));
//             return rejectWithValue(error.response.data.message);
//         }
//     },
// );
