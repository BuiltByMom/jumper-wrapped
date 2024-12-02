import {type ReactElement, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {PageBackgound} from './Backgrounds';
import {Carousel} from './Carousel';
import {NextYearButton} from './NextYearButton';
import {WalletSelector} from './WalletSelector';
import {WrappedButton} from './WrappedButton';
import {Header} from './common/Header';
import {cl} from './utils/tools';

const cards = [
	{name: 'Card 1', description: 'kek'},
	{name: 'Card 2', description: 'kek'},
	{name: 'Card 3', description: 'kek'},
	{name: 'Card 4', description: 'kek'},
	{name: 'Card 5', description: 'kek'},
	{name: 'Card 6', description: 'kek'}
];

export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);
	const [view, set_view] = useState<'greetings' | 'carousel'>('greetings');

	const account = useWallet();
	const {isConnected, address} = useAccount();
	const router = useRouter();

	const isNotEnoughData = false;

	/**********************************************************************************************
	 * Redirect to home if user is not connected
	 *********************************************************************************************/
	useEffect(() => {
		if (!account.connected && !isConnected) {
			router.push('/');
		}
	}, [account, isConnected, router]);

	const onStart = (): void => {
		set_view('carousel');
	};

	return (
		<>
			<div className={cl('flex h-screen items-center justify-center w-full')}>
				<Header
					set_isWalletSelectorOpen={set_isWalletSelectorOpen}
					isCarouselView={view === 'carousel'}
				/>
				<PageBackgound position={view === 'greetings' ? 'center' : 'bottom-right'} />

				{!isNotEnoughData && view === 'greetings' ? (
					<>
						<WrappedButton
							set_isWalletSelectorOpen={set_isWalletSelectorOpen}
							onStart={onStart}
						/>
						<WalletSelector
							isOpen={isWalletSelectorOpen}
							onClose={() => set_isWalletSelectorOpen(false)}
						/>
					</>
				) : isNotEnoughData ? (
					<NextYearButton />
				) : (
					<Carousel
						profile={account.publicKey?.toString() || address}
						cards={cards}
					/>
				)}
			</div>
		</>
	);
}
