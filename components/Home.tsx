import {type ReactElement, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {PageBackgound} from './Backgrounds';
import {Carousel} from './Carousel';
import {WalletSelector} from './WalletSelector';
import {WrappedButton} from './WrappedButton';
import {Header} from './common/Header';
import {cl} from './utils/tools';

const cards = [
	{name: 'lol', description: 'kek'},
	{name: 'lol1', description: 'kek'},
	{name: 'lol2', description: 'kek'},
	{name: 'lol3', description: 'kek'},
	{name: 'lol4', description: 'kek'},
	{name: 'lol5', description: 'kek'}
];

export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);
	const [view, set_view] = useState<'greetings' | 'carousel'>('greetings');

	const account = useWallet();
	const {isConnected, address} = useAccount();
	const router = useRouter();

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

	console.log(account.publicKey, address);

	return (
		<>
			<div className={cl('flex h-screen items-center justify-center w-full')}>
				<Header set_isWalletSelectorOpen={set_isWalletSelectorOpen} />
				<PageBackgound position={view === 'greetings' ? 'center' : 'bottom-right'} />

				{view === 'greetings' ? (
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
