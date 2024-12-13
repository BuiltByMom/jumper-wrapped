import {useMemo, useState} from 'react';

import {PageBackground} from '../Backgrounds';
import {Header} from '../common/Header';
import {WalletSelector} from '../WalletSelector';
import {CarouselSection} from './CarouselSection';
import {GreetingsSection} from './GreetingsSection';
import {NoDataSection} from './NoDataSection';

import type {ReactElement} from 'react';
import type {TCardData, TUserProfile} from '../utils/cards';
import type {TViewState} from './types';

import {cl} from '@/components/utils/tools';

function MainContent(props: {
	view: TViewState;
	set_isWalletSelectorOpen: (value: boolean) => void;
	set_view: (value: TViewState) => void;
	profile: TUserProfile | null;
	cards: TCardData[] | undefined;
}): ReactElement {
	const {view, set_isWalletSelectorOpen, set_view, profile, cards} = props;
	const hasMoreThan3Cards = useMemo(() => cards && cards.length > 3, [cards]);

	if (view === 'greetings') {
		return (
			<GreetingsSection
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				set_view={set_view}
			/>
		);
	}

	if (view === 'carousel' && hasMoreThan3Cards) {
		return (
			<CarouselSection
				profile={profile}
				cards={cards || []}
			/>
		);
	}

	if (view === 'carousel' && !hasMoreThan3Cards) {
		return <NoDataSection />;
	}

	return (
		<GreetingsSection
			set_isWalletSelectorOpen={set_isWalletSelectorOpen}
			set_view={set_view}
		/>
	);
}

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
	const [cards] = useState<TCardData[] | undefined>(undefined);
	const [profile] = useState<TUserProfile | null>(null);
	// const account = useWallet();
	// const {isConnected, address} = useAccount();
	// const router = useRouter();

	// const evmOrSolAddress = useMemo(() => {
	// 	if (account.publicKey) {
	// 		return account.publicKey.toString();
	// 	}
	// 	return address;
	// }, [account.publicKey, address]);

	/**********************************************************************************************
	 * Wallet Connection Effects
	 * Handles wallet connection state and data fetching
	 *********************************************************************************************/
	// useEffect(() => {
	// 	if (!account.connected && !isConnected && view !== 'greetings') {
	// 		set_view('greetings');
	// 	}
	// }, [account, isConnected, router, view]);

	// useEffect(() => {
	// 	if (evmOrSolAddress) {
	// 		fetchUserCards(evmOrSolAddress).then(cards => {
	// 			const intermediateCard: TCardData = {id: 'Intermediate', data: {statsAmount: cards.length}};
	// 			set_cards([...cards, intermediateCard]);
	// 		});
	// 		fetchUserProfile(evmOrSolAddress).then(profile => {
	// 			set_profile(profile);
	// 		});
	// 	}
	// }, [address, evmOrSolAddress]);

	return (
		<div className={cl('flex min-h-dvh relative items-center justify-center w-full')}>
			<Header
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				isCarouselView={view === 'carousel'}
				cardsAmount={cards?.length || 0}
			/>
			<PageBackground position={view === 'greetings' ? 'center' : 'bottom-right'} />

			<MainContent
				view={view}
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				set_view={set_view}
				profile={profile}
				cards={cards}
			/>

			<WalletSelector
				isOpen={isWalletSelectorOpen}
				onClose={() => set_isWalletSelectorOpen(false)}
			/>
		</div>
	);
}
