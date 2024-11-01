import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
	const { mode, paths, port } = options;
	const isDev = mode === 'development';

	return {
		mode: mode ?? 'production',
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: 'bundle.[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(paths),
		module: {
			rules: buildLoaders(mode),
		},
		resolve: buildResolvers(paths),
		devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
		devServer: isDev ? buildDevServer(port) : undefined,
	};
}
