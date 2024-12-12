import {useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {AnimatePresence} from 'framer-motion';
import {useWallet} from '@solana/wallet-adapter-react';

import {PageBackground} from '../Backgrounds';
import {Header} from '../common/Header';
import {fetchUserCards, fetchUserProfile} from '../utils/cards';
import {CarouselSection} from './CarouselSection';
import {GreetingsSection} from './GreetingsSection';
import {NoDataSection} from './NoDataSection';

import type {ReactElement} from 'react';
import type {TCardData, TUserProfile} from '../utils/cards';
import type {TViewState} from './types';

import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Home Page Component
 * Main landing page with wallet connection and stats display
 * Features:
 * - Wallet integration (Ethereum & Solana)
 * - Dynamic background
 * - Stats card carousel
 * - Responsive design
 * - Section transitions
 ************************************************************************************************/
export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);
	const [view, set_view] = useState<TViewState>('greetings');
	const [cards, set_cards] = useState<TCardData[] | undefined>(undefined);
	const [profile, set_profile] = useState<TUserProfile | null>(null);

	const account = useWallet();
	const {isConnected, address} = useAccount();

	const router = useRouter();
	const hasMoreThan3Cards = cards && cards.length > 3;

	const evmOrSolAddress = useMemo(() => {
		if (account.publicKey) {
			return account.publicKey.toString();
		}
		return address;
	}, [account.publicKey, address]);

	/**********************************************************************************************
	 * Wallet Connection Effects
	 * Handles wallet connection state and data fetching
	 *********************************************************************************************/
	useEffect(() => {
		if (!account.connected && !isConnected) {
			set_view('greetings');
		}
	}, [account, isConnected, router]);

	useEffect(() => {
		if (evmOrSolAddress) {
			fetchUserCards(evmOrSolAddress).then(cards => {
				const intermediateCard: TCardData = {id: 'Intermediate', data: {statsAmount: cards.length}};
				set_cards([...cards, intermediateCard]);
			});
			fetchUserProfile(evmOrSolAddress).then(profile => {
				set_profile(profile);
			});
		}
	}, [address, evmOrSolAddress]);

	return (
		<>
			<div className={cl('flex min-h-dvh relative items-center justify-center w-full')}>
				<Header
					set_isWalletSelectorOpen={set_isWalletSelectorOpen}
					isCarouselView={view === 'carousel'}
					cardsAmount={cards?.length || 0}
				/>
				<PageBackground position={view === 'greetings' ? 'center' : 'bottom-right'} />

				<AnimatePresence
					mode={'wait'}
					initial={true}>
					{view === 'greetings' ? (
						<GreetingsSection
							isWalletSelectorOpen={isWalletSelectorOpen}
							set_isWalletSelectorOpen={set_isWalletSelectorOpen}
							view={view}
							set_view={set_view}
						/>
					) : hasMoreThan3Cards && view === 'carousel' ? (
						<CarouselSection
							profile={profile}
							cards={cards || []}
						/>
					) : (
						<NoDataSection />
					)}
				</AnimatePresence>
			</div>
		</>
	);
}
