import {Carousel} from '../Carousel';
import {useCarousel} from '../carouselContext';
import {JumperPopup} from '../JumperPopup';

import type {ReactElement} from 'react';
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
	const {api} = useCarousel();
	const isLastSlide = api?.selectedScrollSnap() === (api?.scrollSnapList().length || 0) - 1;

	return (
		<div>
			<div className={''}>
				{isLastSlide ? <JumperPopup /> : null}
				<Carousel cards={cards} />
			</div>
		</div>
	);
}
