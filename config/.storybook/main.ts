import type { StorybookConfig } from "@storybook/react-webpack5";
import type { BuildPaths } from "../build/types/config";
import path from 'path';
import { getCssLoader } from "../build/loaders/getCssLoader";
import { getSvgLoader } from "../build/loaders/getSvgLoader";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config, options) {
    const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

    // TODO: remove errors
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.resolve?.modules?.push(srcPath);
    config.module?.rules?.push(getSvgLoader());
    config.module?.rules?.push(getCssLoader(true, false));
    config.plugins?.push(new MiniCssExtractPlugin());
    return config;
  },
};
export default config;
