import {useEffect, useState} from 'react';
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
	const isNotEnoughData = cards && cards.length === 0;

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
		if (address) {
			fetchUserCards(address).then(cards => {
				set_cards(cards);
			});
			fetchUserProfile(address).then(profile => {
				set_profile(profile);
			});
		}
	}, [address]);

	console.warn(profile);

	return (
		<>
			<div className={cl('flex h-screen relative items-center justify-center w-full')}>
				<Header
					set_isWalletSelectorOpen={set_isWalletSelectorOpen}
					isCarouselView={view === 'carousel'}
					cardsAmount={cards?.length || 0}
				/>
				<PageBackground position={view === 'greetings' ? 'center' : 'bottom-right'} />

				<AnimatePresence
					mode={'wait'}
					initial={true}>
					{!isNotEnoughData && view === 'greetings' && (
						<GreetingsSection
							isWalletSelectorOpen={isWalletSelectorOpen}
							set_isWalletSelectorOpen={set_isWalletSelectorOpen}
							view={view}
							set_view={set_view}
						/>
					)}

					{!isNotEnoughData && view === 'carousel' && (
						<CarouselSection
							profile={profile}
							cards={cards || []}
						/>
					)}

					{isNotEnoughData && <NoDataSection />}
				</AnimatePresence>
			</div>
		</>
	);
}
