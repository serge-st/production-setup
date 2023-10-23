import { StoryFn } from '@storybook/react';
import { PageWrapper } from 'pages/PageWrapper';

export function PageWrapperDecorator() {
    return (Story: StoryFn) => {
        return (
            <div
                style={{
                    height: '100dvh',
                    display: 'flex',
                }}
            >
                <PageWrapper style={{ flex: 1 }}>
                    <Story />
                </PageWrapper>
            </div>
        );
    };
}
