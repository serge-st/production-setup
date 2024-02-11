import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../interfaces/UserSchema';
import { USER_ACCESS_TOKEN } from 'shared/lib';
import { logout } from '../services/logout';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (_state, action: PayloadAction<UserSchema>) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout.pending, () => {
                return initialState;
            })
            .addCase(logout.fulfilled, () => {
                localStorage.removeItem(USER_ACCESS_TOKEN);
                return initialState;
            })
            .addCase(logout.rejected, () => {
                localStorage.removeItem(USER_ACCESS_TOKEN);
                return initialState;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
