import type { StorybookConfig } from "@storybook/react-webpack5";
import type { BuildPaths } from "../build/types/config";
import path from 'path';
import { getCssLoader } from "../build/loaders/getCssLoader";
import { getSvgLoader } from "../build/loaders/getSvgLoader";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import ExtractTranslations from './plugins/ExtractTranslations';

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config) {
    const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

    if (config.module?.rules) {
      const fileLoaderRule = config.module?.rules.find(rule => {
        if (rule && typeof rule === 'object' && 'test' in rule && rule.test instanceof RegExp) {
          return rule.test && rule.test.test('.svg');
        }
        return undefined
      }) as RuleSetRule | undefined;

      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
    }

    config.resolve?.modules?.push(srcPath);
    config.module?.rules?.push(getSvgLoader());
    config.module?.rules?.push(getCssLoader(true, false));
    config.plugins?.push(new ExtractTranslations(), new MiniCssExtractPlugin());
    return config;
  },
};
export default config;
