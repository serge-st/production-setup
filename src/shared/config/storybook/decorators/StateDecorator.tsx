import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StateDecorator(initialState: DeepPartial<StateSchema>) {
    return (Story: StoryFn) => {
        return (
            <StoreProvider initialState={initialState as StateSchema}>
                <Story />
            </StoreProvider>
        );
    };
}
