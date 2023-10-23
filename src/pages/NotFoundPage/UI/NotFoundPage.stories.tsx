import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { TranslationsDecorator } from 'shared/config/storybook/decorators/TranslationsDecorator';
import { PageWrapperDecorator } from 'shared/config/storybook/decorators/PageWrapperDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [
        PageWrapperDecorator(),
        TranslationsDecorator(),
    ],
};
