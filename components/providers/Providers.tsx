'use client';

import {type ReactElement, useMemo} from 'react';
import {arbitrum, base, mainnet, optimism, polygon} from 'viem/chains';
import {WagmiProvider} from 'wagmi';
import {darkTheme, getDefaultConfig, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {clusterApiUrl} from '@solana/web3.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {Carousel} from '../carouselContext';
import {WithFonts} from '../common/WithFonts';

import '@rainbow-me/rainbowkit/styles.css';
import '@solana/wallet-adapter-react-ui/styles.css';

const config = getDefaultConfig({
	appName: 'Jumper Wrapped',
	projectId: process.env.WALLETCONNECT_PROJECT_ID ?? '',
	chains: [mainnet, polygon, optimism, arbitrum, base],
	ssr: true // If your dApp uses server side rendering (SSR)
});

export function Providers({children}: {children: ReactElement}): ReactElement {
	const network = WalletAdapterNetwork.Devnet;
	const queryClient = new QueryClient();
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	return (
		<WithFonts>
			<Carousel
				opts={{
					align: 'start'
				}}
				className={'w-full'}>
				<WagmiProvider config={config}>
					<QueryClientProvider client={queryClient}>
						<RainbowKitProvider
							modalSize={'compact'}
							theme={{
								...darkTheme({
									borderRadius: 'large'
								}),
								colors: {
									...darkTheme().colors,
									modalBackground: '#5000FF',
									modalBorder: '#33FFEE',
									menuItemBackground: '#E64DFF',
									modalText: '#FFFFFF',
									modalTextSecondary: '#FFFFFFDD',
									accentColor: '#33FFEE'
								}
							}}>
							<ConnectionProvider endpoint={endpoint}>
								<WalletProvider
									wallets={[]}
									autoConnect>
									<WalletModalProvider>{children}</WalletModalProvider>
								</WalletProvider>
							</ConnectionProvider>
						</RainbowKitProvider>
					</QueryClientProvider>
				</WagmiProvider>
			</Carousel>
		</WithFonts>
	);
}
