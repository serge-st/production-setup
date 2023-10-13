import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { getCssLoader } from './loaders/getCssLoader';

export function getLoaders(buildOptions: BuildOptions): RuleSetRule[] {
    const { isDev, isDevServer } = buildOptions;

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = getCssLoader(isDev, isDevServer);

    const babelLoader = {
        test: /\.(?:js|mjs|cjs|tsx?)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                ],
            },
        },
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        cssLoader,
    ];
}
