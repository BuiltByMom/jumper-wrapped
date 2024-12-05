import {type ReactElement, useCallback} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel} from './carouselContext';
import NoSleepCard from './cards/share/NoSleep';
import {Button} from './common/Button';

const domain = 'https://jumper-wrap.builtby.dad';

const cardAnimation = {
	initial: {opacity: 0, scale: 0, x: 50},
	animate: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			opacity: {duration: 0.35}
		}
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		x: -50,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

function CarouselCard(props: React.HTMLAttributes<HTMLDivElement>): ReactElement {
	const {selectedIndex} = useCarousel();

	return (
		<AnimatePresence mode={'popLayout'}>
			<motion.div
				key={selectedIndex}
				variants={cardAnimation}
				initial={'initial'}
				animate={'animate'}>
				{props.children}
			</motion.div>
		</AnimatePresence>
	);
}

export function Carousel({
	cards,
	profile
}: {
	cards: {title: string; component: ReactElement}[];
	profile?: string;
}): ReactElement {
	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${domain}/${profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [profile]);

	return (
		<div className={'relative'}>
			<div className={'relative w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
					{[
						...cards,
						{
							title: 'Card 5',
							component: (
								<NoSleepCard
									width={440}
									timestamp={'121121212'}
								/>
							)
						}
					].map((_, index) => (
						<CarouselItem
							key={index}
							className={'h-screen w-screen md:h-[655px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
							<CarouselCard>
								{index < cards.length ? (
									<>{cards[index].component}</>
								) : (
									<div className={'relative max-sm:mb-40'}>
										<NoSleepCard
											width={440}
											timestamp={'1312312'}
										/>
										<div
											className={
												'absolute left-1/2 z-50 -translate-x-1/2 max-sm:bottom-12 md:-bottom-6'
											}>
											<Button
												onClick={clickToTweet}
												title={'Share on X'}
											/>
										</div>
									</div>
								)}
							</CarouselCard>
						</CarouselItem>
					))}
				</CarouselContent>
			</div>
			<div className={'absolute inset-0 mx-auto w-screen px-20 md:w-[800px] xl:w-[1200px]'}>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</div>
	);
}
