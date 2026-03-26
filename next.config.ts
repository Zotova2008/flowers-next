/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	distDir: 'dist',
	basePath: process.env.NODE_ENV === 'production' ? '/flowers-next' : '',
	images: {
		unoptimized: true,
	},
}

module.exports = nextConfig
