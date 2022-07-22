/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/blog',
				destination: 'https://rohitp934.medium.com/',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
