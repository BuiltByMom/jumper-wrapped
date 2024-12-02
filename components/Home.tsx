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
import {cl} from './utils/tools';

const cards = [
	{title: 'Card 1', description: 'kek'},
	{title: 'Card 2', description: 'kek'},
	{title: 'Card 3', description: 'kek'},
	{title: 'Card 4', description: 'kek'},
	{title: 'Card 5', description: 'kek'},
	{title: 'Card 6', description: 'kek'}
];

const wiggleAnimation = {
	initial: {opacity: 0, scale: 0},
	animate: {
		opacity: 1,
		scale: 1,
		rotate: [0, -2, 2, -2, 0], // Wiggle rotation angles
		transition: {
			duration: 0.5,
			rotate: {
				duration: 0.4,
				delay: 0.2, // Start wiggle after initial scale animation
				ease: 'easeInOut',
				repeat: 1 // Wiggle once
			}
		}
	},
	exit: {opacity: 0, scale: 0.8}
};

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

	const {api} = useCarousel();
	const isLastSlide = api?.selectedScrollSnap() === (api?.scrollSnapList().length || 0) - 1;

	return (
		<>
			<div className={cl('flex h-screen relative items-center justify-center w-full')}>
				<Header
					set_isWalletSelectorOpen={set_isWalletSelectorOpen}
					isCarouselView={view === 'carousel'}
				/>
				<PageBackgound position={view === 'greetings' ? 'center' : 'bottom-right'} />

				<AnimatePresence
					mode={'wait'}
					initial={true}>
					{!isNotEnoughData && view === 'greetings' && (
						<motion.div
							key={'greetings-section'}
							initial={{opacity: 0, scale: 0}}
							animate={{opacity: 1, scale: 1}}
							exit={{opacity: 0, scale: 0}}
							transition={{duration: 0.5}}>
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
						<motion.div
							key={'carousel-section'}
							variants={wiggleAnimation}
							initial={'initial'}
							animate={'animate'}
							exit={'exit'}>
							<div className={''}>
								{isLastSlide ? <JumperPopup /> : null}
								<Carousel
									profile={account.publicKey?.toString() || address}
									cards={cards}
								/>
							</div>
						</motion.div>
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
