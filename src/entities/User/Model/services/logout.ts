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
