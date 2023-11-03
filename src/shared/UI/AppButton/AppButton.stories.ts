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
export const ClearMd: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear',
    },
};

export const ClearLg: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear',
        size: 'large',
    },
};

export const ClearDisabled: Story = {
    args: {
        children: 'Test Disabled',
        theme: 'clear',
        disabled: true,
    },
};

export const ClearInversedMd: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear-inversed',
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};

export const ClearInversedLg: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear-inversed',
        size: 'large',
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};

export const ClearInversedDisabled: Story = {
    args: {
        children: 'Test Disabled',
        theme: 'clear-inversed',
        disabled: true,
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
