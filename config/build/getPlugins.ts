import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function getPlugins({ paths, isDev, isCIBuild }: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
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

    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
        openAnalyzer: false,
    });

    if (!isCIBuild) plugins.push(bundleAnalyzerPlugin);

    return plugins;
}
