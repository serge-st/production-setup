import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../interfaces/UserSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (_state, action: PayloadAction<UserSchema>) => {
            console.log('userSlice action.payload', action.payload);
            return action.payload;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
