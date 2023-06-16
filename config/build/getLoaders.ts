import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export function getLoaders(buildOptions: BuildOptions): RuleSetRule[] {
    const { isDevServer } = buildOptions;

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

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
            'css-loader',
            'sass-loader',
        ],
    }

    return [
        typeScriptLoader,
        cssLoader,
    ];
}