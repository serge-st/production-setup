import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';

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
    theme: {
      defaultValue: 'regular',
      toolbar: {
        items: [
          { value: 'regular', icon: 'circlehollow', title: 'Regular Theme' },
          { value: 'dark', icon: 'circle', title: 'Dark Theme' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Russian' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    ThemeDecorator(),
  ],
};

export default preview;
