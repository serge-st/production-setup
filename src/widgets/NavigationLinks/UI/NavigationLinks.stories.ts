import type { Meta, StoryObj } from '@storybook/react';

import { NavigationLinks } from './NavigationLinks';
import { TranslationsDecorator } from 'shared/config/storybook/decorators/TranslationsDecorator';
import { PrimaryBgColorElmDecorator } from 'shared/config/storybook/decorators/PrimaryBgColorElmDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widgets/NavigationLinks',
    component: NavigationLinks,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof NavigationLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        showIcons: true,
    },
    decorators: [
        TranslationsDecorator(),
        PrimaryBgColorElmDecorator(),
    ],
};

export const Narrow: Story = {
    args: {
        showIcons: true,
        style: 'narrow',
    },
    decorators: [
        TranslationsDecorator(),
        PrimaryBgColorElmDecorator(),
    ],
};
