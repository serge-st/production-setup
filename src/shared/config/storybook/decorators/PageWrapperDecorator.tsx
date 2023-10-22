import { StoryFn } from '@storybook/react';
import { PageWrapper } from 'pages/PageWrapper';

export function PageWrapperDecorator() {
    return (Story: StoryFn) => {
        return (
            <PageWrapper>
                <Story />
            </PageWrapper>
        );
    };
}
