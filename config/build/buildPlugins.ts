import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions, BuildPaths } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins(paths: BuildPaths): Configuration['plugins'] {
	return [
		new HtmlWebpackPlugin({ 
			template: path.resolve(paths.public, 'index.html'), 
			favicon: path.resolve(paths.public, 'favicon.ico')
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin(),
		// new BundleAnalyzerPlugin(),
		new ForkTsCheckerWebpackPlugin(),
		new ReactRefreshWebpackPlugin(),
		//Плагин для копирования файлов в билд, например перевод
		// new CopyPlugin({ patterns: [{ from: '', to: '' }] })
	];
}
