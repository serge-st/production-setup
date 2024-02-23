import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test loginByUsername Async Thunk', () => {
    const state = {
        login: {
            username: 'testUser',
            password: 'testPass',
        },
    };

    const response = {
        data: {
            user: {
                id: 1,
                username: 'Test',
                email: 'test@email.com',
            },
        },
    };

    let dispatch: Dispatch;
    let getState: () => void;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn().mockReturnValue(state);
    });

    it('Should retrieve user data', async () => {
        mockedAxios.post.mockResolvedValue(Promise.resolve(response));
        const action = loginByUsername();
        const result = await action(dispatch, getState, undefined);
        console.log(result);
    });
});
