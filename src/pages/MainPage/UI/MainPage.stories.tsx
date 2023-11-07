import type { Meta, StoryObj } from '@storybook/react';

import MainPage from './MainPage';
import { TranslationsDecorator } from 'shared/config/storybook/decorators/TranslationsDecorator';
import { PageWrapperDecorator } from 'shared/config/storybook/decorators/PageWrapperDecorator';
import { StateDecorator } from 'shared/config/storybook/decorators/StateDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [
        PageWrapperDecorator(),
        TranslationsDecorator(),
        StateDecorator({ counter: { value: 0 } }),
    ],
};
