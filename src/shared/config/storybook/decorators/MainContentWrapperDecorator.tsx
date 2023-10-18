import { StoryFn } from '@storybook/react';

export function MainContentWrapperDecorator() {
    return (Story: StoryFn) => {
        return (
            <div
                style={{
                    height: '100dvh',
                    display: 'flex',
                }}
            >
                <Story />
            </div>
               
        );
    };
}
