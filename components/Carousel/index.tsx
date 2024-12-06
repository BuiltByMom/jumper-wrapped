import PaperHandedCard from '../cards/profiles/PaperHanded';
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../carouselContext';
import {getCardComponent} from '../utils/cards';
import {CarouselCard} from './Card';

import type {ReactElement} from 'react';
import type {TCarouselProps} from './types';

/************************************************************************************************
 * Carousel Component
 * Main carousel implementation for displaying user stats cards
 * Features:
 * - Responsive design
 * - Progressive card reveal
 * - Navigation controls
 * - Social sharing integration
 * - Final card with sharing options
 ************************************************************************************************/
export function Carousel({cards}: TCarouselProps): ReactElement {
	return (
		<div className={'relative'}>
			<div className={'relative z-10 w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
					{[...cards, {id: 'swapaholic', data: {}}].map((_, index) => (
						<CarouselItem
							key={index}
							className={'h-screen w-screen md:h-[655px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
							<CarouselCard index={index}>
								{index < cards.length ? (
									getCardComponent(cards[index].id, cards[index].data)
								) : (
									<div className={'relative max-sm:mb-40'}>
										<PaperHandedCard
											topRatio={20}
											width={440}
										/>
									</div>
								)}
							</CarouselCard>
						</CarouselItem>
					))}
				</CarouselContent>
			</div>
			<div
				className={
					'pointer-events-none absolute inset-0 z-10 mx-auto w-screen px-20 md:w-[800px] xl:w-[1200px]'
				}>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</div>
	);
}
