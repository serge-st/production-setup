import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function getDevServerConfig(buildOptions: BuildOptions): DevServerConfiguration {
    return {
        port: buildOptions.devServerPort,
        open: true,
    }
}