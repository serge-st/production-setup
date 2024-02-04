import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { TranslationsDecorator } from 'shared/config/storybook/decorators/TranslationsDecorator';
import { StateDecorator } from 'shared/config/storybook/decorators/StateDecorator';

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

export const Default: Story = {
    args: {},
    decorators: [
        StateDecorator({
            login: {
                username: '',
                password: '',
                isLoading: false,
            },
        }),
        TranslationsDecorator(),
    ],
};

