import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { getLoaders } from './getLoaders';
import { getPlugins } from './getPlugins';
import { getResolvers } from './getResolvers';
import { getDevServerConfig } from './getDevServerConfig';

export function getWebpackConfig(buildOptions: BuildOptions): Configuration {
    const { mode, paths, isDev } = buildOptions;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: getLoaders(buildOptions),
        },
        resolve: getResolvers(buildOptions),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: getPlugins(buildOptions),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? getDevServerConfig(buildOptions) : undefined,
    }
}
