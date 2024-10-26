import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildMode } from './types/types';
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(mode: BuildMode): ModuleOptions['rules'] {
	const isDev = mode === 'development';

	const assetsLoader = {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const cssLoader = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	};

	const scssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			cssLoader,
			// Compiles Sass to CSS
			'sass-loader',
		],
	};

	const tsLoader = {
		exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
	};

	return [assetsLoader, scssLoader, tsLoader];
}
