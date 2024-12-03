import {type ReactElement, useCallback} from 'react';

import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './carouselContext';
import NoSleepCard from './cards/share/NoSleep';
import VolumeCard from './cards/stat/Volume';
import {Button} from './common/Button';

const domain = 'https://jumper-wrap.builtby.dad';

export function Carousel({
	cards,
	profile
}: {
	cards: {title: string; description: string}[];
	profile?: string;
}): ReactElement {
	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${domain}/${profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [profile]);

	return (
		<div className={'relative w-[800px] px-20 xl:w-[1200px]'}>
			<CarouselContent className={'-ml-2 md:-ml-4'}>
				{cards.map((_, index) => (
					<CarouselItem
						key={index}
						className={'h-[655px] w-[440px] xl:h-[1200px] xl:w-[660px]'}>
						{index < cards.length - 1 ? (
							<VolumeCard variant={'Green'}>
								<div className={'flex flex-col gap-2'}>
									<p className={'text-xl font-bold'}>{'Volume'}</p>
									<p className={'text-sm font-medium'}>{'123,456'}</p>
								</div>
							</VolumeCard>
						) : (
							<div className={'relative'}>
								<NoSleepCard
									width={440}
									timestamp={'1312312'}
								/>
								<div className={'absolute -bottom-6 left-1/2 -translate-x-1/2'}>
									<Button
										onClick={clickToTweet}
										title={'Share on X'}
									/>
								</div>
							</div>
						)}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</div>
	);
}
