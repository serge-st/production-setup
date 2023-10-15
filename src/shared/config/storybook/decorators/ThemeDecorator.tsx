import { StoryContext, StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export function ThemeDecorator() {
    return (Story: StoryFn, context: StoryContext) => {
        const { theme } = context.globals;
        return (
            <ThemeProvider>
                <div className={`App ${theme}`}>
                    <Story />
                </div>
            </ThemeProvider>
        )
    }
}