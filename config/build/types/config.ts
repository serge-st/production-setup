import { Configuration } from 'webpack';

interface BuildPaths {
    entry: string;
    output: string;
    htmlTemplate: string;
}

export interface BuildOptions {
    mode: Configuration['mode'];
    paths: BuildPaths;
}