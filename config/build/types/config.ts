import { Configuration } from 'webpack';

export interface BuildPaths {
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
    isCIBuild: boolean;
}
export interface BuildEnv {
    MODE: Configuration['mode'];
    PORT: string;
    DEV_SERVER: string;
    CI_BUILD: string;
}
