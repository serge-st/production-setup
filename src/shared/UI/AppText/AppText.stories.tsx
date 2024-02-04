import type { Meta, StoryObj } from '@storybook/react';
import { AppText } from './AppText';
import { PrimaryBgColorElmDecorator } from 'shared/config/storybook/decorators/PrimaryBgColorElmDecorator';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/UI/AppText',
    component: AppText,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
    args: {
        title: 'Test Title',
        body: 'Test Body',

    },
    argTypes: {
        theme: {
            options: ['standard', 'highlighted', 'error'],
            control: { type: 'select' },
        },
    },
    decorators: [],
};

export const Inversed: Story = {
    args: {
        title: 'Test Title',
        body: 'Test Body',
        theme: 'inversed',
    },

    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};
