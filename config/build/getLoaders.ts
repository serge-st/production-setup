import { RuleSetRule } from 'webpack';

const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

export function getLoaders(): RuleSetRule[] {
    return [
        typeScriptLoader,
    ];
}