import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../interfaces/UserSchema';

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
