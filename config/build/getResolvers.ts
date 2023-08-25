import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function getResolvers({ paths }: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        roots: [paths.src],
    }
}