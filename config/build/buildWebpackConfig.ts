import { Configuration } from 'webpack';
import { BuildOptions } from './types/config';
import { getLoaders } from './getLoaders';
import { getPlugins } from './getPlugins';
import { getResolvers } from './getResolvers';

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
    const { mode, paths } = buildOptions;

    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: getLoaders(),
        },
        resolve: getResolvers(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: getPlugins(buildOptions),
    }
}
