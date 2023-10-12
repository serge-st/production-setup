import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

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

    const cssLoader = {
        test: /\.s?[ac]ss$/i,
        use: [
            isDevServer ? 'style-loader' :
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false,
                    },
                },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string): boolean => resPath.includes('.module.'),
                        localIdentName: isDev
                            ? '[local]__[hash:base64:6]'
                            : '[hash:base64:8]'
                        ,
                    },
                },
            },
            'sass-loader',
        ],
    };

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
