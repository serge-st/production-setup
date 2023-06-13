import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

export function getPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new ProgressPlugin(),
    ];
}