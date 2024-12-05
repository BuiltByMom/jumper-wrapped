import {type ReactElement, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {AnimatePresence, motion} from 'framer-motion';
import {useWallet} from '@solana/wallet-adapter-react';

import {PageBackgound} from './Backgrounds';
import {Carousel} from './Carousel';
import {useCarousel} from './carouselContext';
import {JumperPopup} from './JumperPopup';
import {NextYearButton} from './NextYearButton';
import {WalletSelector} from './WalletSelector';
import {WrappedButton} from './WrappedButton';
import {Header} from './common/Header';
import {fetchUserCards} from './utils/cards';
import {cl} from './utils/tools';

import type {TCardData} from './utils/cards';

const greetingsAnimation = {
	initial: {opacity: 0, scale: 0},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 17,
			mass: 1.5,
			opacity: {duration: 0.4}
		}
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 10
		}
	}
};

export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);
	const [view, set_view] = useState<'greetings' | 'carousel'>('greetings');
	const [cards, set_cards] = useState<TCardData[] | undefined>(undefined);

	const account = useWallet();
	const {isConnected, address} = useAccount();
	const router = useRouter();
	const isNotEnoughData = cards && cards.length === 0;

	/**********************************************************************************************
	 * Redirect to home if user is not connected
	 *********************************************************************************************/
	useEffect(() => {
		if (!account.connected && !isConnected) {
			set_view('greetings');
		}
	}, [account, isConnected, router]);

	useEffect(() => {
		if (address) {
			fetchUserCards(address).then(cards => set_cards(cards));
		}
	}, [address]);

	const {api} = useCarousel();
	const isLastSlide = api?.selectedScrollSnap() === (api?.scrollSnapList().length || 0) - 1;

	return (
		<>
			<div className={cl('flex h-screen relative items-center justify-center w-full')}>
				<Header
					set_isWalletSelectorOpen={set_isWalletSelectorOpen}
					isCarouselView={view === 'carousel'}
					cardsAmount={cards?.length || 0}
				/>
				<PageBackgound position={view === 'greetings' ? 'center' : 'bottom-right'} />

				<AnimatePresence
					mode={'wait'}
					initial={true}>
					{!isNotEnoughData && view === 'greetings' && (
						<motion.div
							key={'greetings-section'}
							variants={greetingsAnimation}
							initial={'initial'}
							animate={'animate'}
							exit={'exit'}>
							<WrappedButton
								set_isWalletSelectorOpen={set_isWalletSelectorOpen}
								onStart={() => set_view('carousel')}
							/>
							<WalletSelector
								isOpen={isWalletSelectorOpen}
								onClose={() => set_isWalletSelectorOpen(false)}
							/>
						</motion.div>
					)}

					{!isNotEnoughData && view === 'carousel' && (
						<div>
							<div className={''}>
								{isLastSlide ? <JumperPopup /> : null}
								<Carousel
									profile={account.publicKey?.toString() || address}
									cards={cards || []}
								/>
							</div>
						</div>
					)}

					{isNotEnoughData && (
						<motion.div
							key={'no-data-section'}
							initial={{opacity: 0, scale: 0.9}}
							animate={{opacity: 1, scale: 1}}
							exit={{opacity: 0, scale: 0.8}}
							transition={{duration: 1}}>
							<NextYearButton />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}
