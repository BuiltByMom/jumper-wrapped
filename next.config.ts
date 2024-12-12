import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		WALLETCONNECT_PROJECT_ID: process.env.WALLETCONNECT_PROJECT_ID ?? ''
	}
};

export default nextConfig;
