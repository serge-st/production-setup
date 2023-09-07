import { Configuration } from 'webpack';

interface BuildPaths {
    entry: string;
    output: string;
    htmlTemplate: string;
    src: string;
}

export interface BuildOptions {
    mode: Configuration['mode'];
    paths: BuildPaths;
    devServerPort: number;
    isDev: boolean;
    isDevServer: boolean;
}
export interface BuildEnv {
    MODE: Configuration['mode'];
    PORT: string;
    DEV_SERVER: string;
}
