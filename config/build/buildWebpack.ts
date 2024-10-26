import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
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
		//Указываем файл вхождения нашего приложение
		entry: paths.entry,
		//Куда и как сборка будет билдиться
		output: {
			path: paths.output,
			//contenthash - при каждом изменении проекта указывается новый хеш, для предотвращения кеширования версий
			filename: 'bundle.[contenthash].js',
			//Очищение старого бандла при новой сборке
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
