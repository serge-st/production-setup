import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { getThemeType } from './globals/getThemeType';
import { getLocaleType } from './globals/getLocaleType';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    theme: getThemeType(),
    locale: getLocaleType(),
  },
  decorators: [
    RouterDecorator(),
    ThemeDecorator(),
  ],
};

export default preview;
