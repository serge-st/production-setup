import path from 'path';
import { Configuration } from 'webpack';
import { getWebpackConfig } from './config/build/getWebpackConfig';
import { BuildEnv } from './config/build/types/config';

const config = (env: BuildEnv): Configuration => {
    const PORT = env.PORT || 3000;
    const mode = env.MODE || 'development';
    const isDev = mode === 'development';
    const isDevServer = env.DEV_SERVER === 'true';
    const isCIBuild = env.CI_BUILD === 'true';

    return getWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'dist'),
            htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src'),
        },
        devServerPort: Number(PORT),
        isDev,
        isDevServer,
        isCIBuild,
    });
};

export default config;
