import { Configuration } from 'webpack';

interface BuildPaths {
    entry: string;
    output: string;
    htmlTemplate: string;
}

export interface BuildOptions {
    mode: Configuration['mode'];
    paths: BuildPaths;
    devServerPort: number;
    isDev: boolean;
}
export interface BuildEnv {
    MODE: Configuration['mode'];
    PORT: string;
}