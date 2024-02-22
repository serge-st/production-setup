import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';
import { getLoginIsLoading } from './getLoginIsLoading';
import { getLoginPassword } from './getLoginPassword';
import { getLoginUsername } from './getLoginUsername';

describe('Test LoginModal Selectors', () => {
    describe('Test getLoginError', () => {
        it('Should return the login error', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    error: 'Test error',
                },
            };
            const result = getLoginError(state as StateSchema);
            expect(result).toEqual('Test error');
        });

        it('Should not crash if error is undefined', () => {
            const state: DeepPartial<StateSchema> = {};
            const result = getLoginError(state as StateSchema);

            expect(result).toEqual('');
        });
    });

    describe('Test getLoginIsLoading', () => {
        it('Should return the loading boolean', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    isLoading: true,
                },
            };
            const result = getLoginIsLoading(state as StateSchema);
            expect(result).toEqual(true);
        });

        it('Should return false if isLoading is undefined', () => {
            const state: DeepPartial<StateSchema> = {};
            const result = getLoginIsLoading(state as StateSchema);

            expect(result).toEqual(false);
        });
    });

    describe('Test getLoginPassword', () => {
        it('Should return the password', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    password: 'Test password',
                },
            };
            const result = getLoginPassword(state as StateSchema);
            expect(result).toEqual('Test password');
        });

        it('Should not crash if password is undefined', () => {
            const state: DeepPartial<StateSchema> = {};
            const result = getLoginPassword(state as StateSchema);

            expect(result).toEqual('');
        });
    });

    describe('Test getLoginUsername', () => {
        it('Should return the username', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    username: 'Test username',
                },
            };
            const result = getLoginUsername(state as StateSchema);
            expect(result).toEqual('Test username');
        });

        it('Should not crash if username is undefined', () => {
            const state: DeepPartial<StateSchema> = {};
            const result = getLoginUsername(state as StateSchema);

            expect(result).toEqual('');
        });
    });
});
