import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from '../types/config';


export const getCssLoader = (isDev: BuildOptions['isDev'], isDevServer: BuildOptions['isDevServer']) => {
    return {
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
};
