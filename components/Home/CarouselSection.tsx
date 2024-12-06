import {type ReactElement, useEffect, useState} from 'react';
import Confetti from 'react-confetti';

import {Carousel} from '../Carousel';
import {useCarousel} from '../carouselContext';
import {JumperPopup} from '../JumperPopup';

import type {TCardData} from '../utils/cards';

/************************************************************************************************
 * Carousel Section Component
 * Displays user's stats cards in a carousel format
 * Features:
 * - Interactive card carousel
 * - Final slide popup
 * - Responsive layout
 ************************************************************************************************/
export function CarouselSection({cards}: {cards: TCardData[]}): ReactElement {
	const {api, canScrollNext} = useCarousel();
	const isLastSlide = api?.selectedScrollSnap() === (api?.scrollSnapList().length || 0) - 1;

	// Confetti state
	const [shouldShowConfetti, set_shouldShowConfetti] = useState(false);
	const [windowSize, set_windowSize] = useState({width: 0, height: 0});

	// Update window size for confetti
	useEffect(() => {
		const updateWindowSize = (): void => {
			set_windowSize({width: window.innerWidth, height: window.innerHeight});
		};
		updateWindowSize();
		window.addEventListener('resize', updateWindowSize);
		return () => window.removeEventListener('resize', updateWindowSize);
	}, []);

	// Show confetti when it's the last card
	useEffect(() => {
		if (!canScrollNext) {
			set_shouldShowConfetti(true);
			const timer = setTimeout(() => set_shouldShowConfetti(false), 5000);
			return () => clearTimeout(timer);
		}
	}, [canScrollNext]);

	return (
		<div>
			<div>
				{!canScrollNext ? <JumperPopup /> : null}
				<Carousel cards={cards} />
			</div>
			{shouldShowConfetti && (
				<Confetti
					width={windowSize.width}
					height={windowSize.height}
					numberOfPieces={400}
					gravity={0.3}
					initialVelocityY={20}
					colors={['#6120FD', '#FF3358', '#FFB800', '#00E5FF']}
					recycle={false}
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						zIndex: 1000,
						pointerEvents: 'none'
					}}
				/>
			)}
		</div>
	);
}