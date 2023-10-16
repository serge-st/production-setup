import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { getThemeType } from './globals/getThemeType';
import { getLocaleType } from './globals/getLocaleType';
import { withRouter } from 'storybook-addon-react-router-v6';

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
    withRouter,
    ThemeDecorator(),
  ],
};

export default preview;
