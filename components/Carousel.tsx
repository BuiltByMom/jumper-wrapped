import {type ReactElement} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel} from './carouselContext';
import {getCardComponent, type TCardData} from './utils/cards';

// const domain = 'https://jumper-wrap.builtby.dad';

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

export function Carousel(props: {cards: TCardData[]; profile?: string}): ReactElement {
	// add to the share card 'Share on X' button
	// const clickToTweet = useCallback(async () => {
	// 	window.open(
	// 		`https://twitter.com/intent/tweet?url=${domain}/${props.profile}?text=Check out my wrapped Jumper!`,
	// 		'_blank'
	// 	);
	// }, [props.profile]);

	return (
		<div className={'relative'}>
			<div className={'relative w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
					{props.cards.map((_, index) => (
						<CarouselItem
							key={index}
							className={'h-screen w-screen md:h-[655px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
							<CarouselCard>
								{getCardComponent(props.cards[index].id, props.cards[index].data)}
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
