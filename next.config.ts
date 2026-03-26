/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export',
	distDir: 'dist',
	basePath: isProd ? '/flowers-next' : '',
	assetPrefix: isProd ? '/flowers-next' : '',
	env: {
		BASE_PATH: isProd ? '/flowers-next' : '',
	},
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
