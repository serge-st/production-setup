import type { Meta, StoryObj } from '@storybook/react';
import { AppButton } from './AppButton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
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
    },
};

export const ClearInversed: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear-inversed',
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ]
};

export const ClearDark: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear',
    },
    parameters: {
        overrideTheme: 'dark',
    },
    decorators: [
    ],
};

export const ClearDarkInversed: Story = {
    args: {
        children: 'Test Button',
        theme: 'clear-inversed',
    },
    parameters: {
        overrideTheme: 'dark',
    },
    decorators: [
        PrimaryBgColorElmDecorator(),
    ],
};


// import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };