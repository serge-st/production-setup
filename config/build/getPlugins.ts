import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

export function getPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: isDev,
        }),
    ];
}
