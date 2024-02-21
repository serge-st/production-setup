import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StateDecorator(initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersMapObject<StateSchema> ) {
    return (Story: StoryFn) => {
        return (
            <StoreProvider initialState={initialState as StateSchema} asyncReducers={asyncReducers}>
                <Story />
            </StoreProvider>
        );
    };
}
