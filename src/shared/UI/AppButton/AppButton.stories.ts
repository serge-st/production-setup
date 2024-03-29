import type { Meta, StoryObj } from '@storybook/react';
import { AppButton } from './AppButton';
import { PrimaryBgColorElmDecorator } from 'shared/config/storybook/decorators/PrimaryBgColorElmDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/UI/AppButton',
    component: AppButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear',
        size: 'medium',
        disabled: false,
    },
    argTypes: {
        size: {
            options: ['medium', 'large'],
            control: { type: 'inline-radio' },
        },
    },
};


export const ClearInversedMd: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear-inversed',
        size: 'medium',
        disabled: false,
    },
    argTypes: {
        size: {
            options: ['medium', 'large'],
            control: { type: 'inline-radio' },
        },
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};

export const SimpleButton: Story = {
    args: {
        children: 'Test Button',
        theme: 'simple',
    },
    decorators: [],
};
