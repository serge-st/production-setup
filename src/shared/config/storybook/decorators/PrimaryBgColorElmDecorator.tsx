import { StoryFn } from '@storybook/react';

export function PrimaryBgColorElmDecorator() {
    return (Story: StoryFn) => (
        <div 
            style={{ 
                backgroundColor: `var(--primary-color)`,
                padding: '16px 24px',
            }}
        >
            <Story />
        </div>
    )
}