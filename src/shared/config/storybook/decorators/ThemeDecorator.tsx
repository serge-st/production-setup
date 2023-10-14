import { StoryContext, StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';

export function ThemeDecorator() {
    return (Story: StoryFn, context: StoryContext) => {
        const { theme } = context.globals;
        return (
            // TODO: Switch to using a theme provider
            <div className={`App ${theme}`}>
                <Story />
            </div>
        )
    }
}