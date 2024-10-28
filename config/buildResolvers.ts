import { Configuration } from 'webpack';
import { BuildPaths } from './types/types';

export function buildResolvers(paths: BuildPaths): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': paths.src,
		},
	};
}
