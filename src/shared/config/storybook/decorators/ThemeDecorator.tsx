import { StoryContext, StoryFn } from '@storybook/react';
import '../../../../app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';


export function ThemeDecorator() {
    return (Story: StoryFn, context: StoryContext) => {
        const overrideTheme = context.parameters?.overrideTheme;
        const theme: Theme = overrideTheme ?? 'regular'
        return (
            <div className={`App ${theme}`}>
                <Story />
            </div>
        )
    }
}