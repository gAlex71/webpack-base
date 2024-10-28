import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import path from 'path';
import { BuildPaths } from './types/types';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin';

export function buildPlugins(paths: BuildPaths): Configuration['plugins'] {
	return [
		new HtmlWebpackPlugin({
			template: path.resolve(paths.public, 'index.html'),
			favicon: path.resolve(paths.public, 'favicon.ico'),
		}),
		new MiniCssExtractPlugin(),
		new ForkTsCheckerWebpackPlugin(),
		new ReactRefreshWebpackPlugin(),
		new StatoscopeWebpackPlugin(),
	];
}
