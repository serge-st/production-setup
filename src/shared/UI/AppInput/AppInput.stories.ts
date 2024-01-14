import type { Meta, StoryObj } from '@storybook/react';
import { AppInput } from './AppInput';
import { PrimaryBgColorElmDecorator } from 'shared/config/storybook/decorators/PrimaryBgColorElmDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/UI/AppInput',
    component: AppInput,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
    args: {
        theme: 'clear',
    },
};

export const ClearDisabled: Story = {
    args: {
        theme: 'clear',
        disabled: true,
    },
};

export const ClearError: Story = {
    args: {
        theme: 'clear',
        hasError: true,
    },
};

export const ClearInversed: Story = {
    args: {
        theme: 'clear-inversed',
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};

export const ClearInversedDisabled: Story = {
    args: {
        theme: 'clear-inversed',
        disabled: true,
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};

export const ClearInversedError: Story = {
    args: {
        theme: 'clear-inversed',
        hasError: true,
    },
};
