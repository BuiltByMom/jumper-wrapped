'use client';

import {type ReactElement, useMemo} from 'react';
import {arbitrum, base, mainnet, optimism, polygon} from 'viem/chains';
import {WagmiProvider} from 'wagmi';
import {darkTheme, getDefaultConfig, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import {UnsafeBurnerWalletAdapter} from '@solana/wallet-adapter-wallets';
import {clusterApiUrl} from '@solana/web3.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {Carousel} from '../carouselContext';
import {WithFonts} from '../common/WithFonts';

import '@rainbow-me/rainbowkit/styles.css';
import '@solana/wallet-adapter-react-ui/styles.css';

const config = getDefaultConfig({
	appName: 'My RainbowKit App',
	projectId: process.env.WALLETCONNECT_PROJECT_ID ?? '',
	chains: [mainnet, polygon, optimism, arbitrum, base],
	ssr: true // If your dApp uses server side rendering (SSR)
});

export function Providers({children}: {children: ReactElement}): ReactElement {
	const network = WalletAdapterNetwork.Devnet;
	const queryClient = new QueryClient();
	// You can also provide a custom RPC endpoint.
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	const wallets = useMemo(
		() => [
			/**
			 * Wallets that implement either of these standards will be available automatically.
			 *
			 *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
			 *     (https://github.com/solana-mobile/mobile-wallet-adapter)
			 *   - Solana Wallet Standard
			 *     (https://github.com/anza-xyz/wallet-standard)
			 *
			 * If you wish to support a wallet that supports neither of those standards,
			 * instantiate its legacy wallet adapter here. Common legacy adapters can be found
			 * in the npm package `@solana/wallet-adapter-wallets`.
			 */
			new UnsafeBurnerWalletAdapter()
		],
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[network]
	);
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
							theme={{
								...darkTheme(),
								colors: {
									...darkTheme().colors,
									modalBackground: '#5102FF',
									accentColor: '#33FFEE',
									accentColorForeground: 'black'
								}
							}}>
							<ConnectionProvider endpoint={endpoint}>
								<WalletProvider
									wallets={wallets}
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
