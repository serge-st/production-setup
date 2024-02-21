import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { TranslationsDecorator } from 'shared/config/storybook/decorators/TranslationsDecorator';
import { StateDecorator } from 'shared/config/storybook/decorators/StateDecorator';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/LoginModal/Model/slice/loginSlice';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widgets/Header',
    component: Header,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const loginAsyncReducer = { login: loginReducer } as ReducersMapObject<StateSchema>;

export const Default: Story = {
    args: {},
    decorators: [
        StateDecorator({
            login: {
                username: '',
                password: '',
                isLoading: false,
            },
        }, loginAsyncReducer),
        TranslationsDecorator(),
    ],
};

