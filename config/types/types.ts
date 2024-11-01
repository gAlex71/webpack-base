export interface BuildPaths {
	entry: string;
	output: string;
	src: string;
	public: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
	port: number;
	paths: BuildPaths;
	mode: BuildMode;
}
