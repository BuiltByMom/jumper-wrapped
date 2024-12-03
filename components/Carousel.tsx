import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './carouselContext';
import {StatCard} from './common/StatCard';

import type {ReactElement} from 'react';

export function Carousel({
	cards,
	profile
}: {
	cards: {title: string; description: string}[];
	profile?: string;
}): ReactElement {
	return (
		<div className={'relative w-[800px] px-20 xl:w-[1200px]'}>
			<CarouselContent className={'-ml-2 md:-ml-4'}>
				{cards.map((stat, index) => (
					<CarouselItem
						key={index}
						className={'h-[655px] w-[440px] xl:h-[1200px] xl:w-[660px]'}>
						<StatCard
							stat={{name: stat.title, description: stat.description}}
							isShareCard={index === cards.length - 1}
							profile={profile}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</div>
	);
}
