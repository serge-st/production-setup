import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const config: Configuration = buildWebpackConfig({
	mode: 'development',
	paths: {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output: path.resolve(__dirname, 'dist'),
		htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
	}
});

export default config;