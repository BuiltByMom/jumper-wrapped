import {useCallback, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel} from './carouselContext';
import DegenElderCard from './cards/profiles/DegenElderCard';
import {Button} from './common/Button';
import {getCardComponent, type TCardData} from './utils/cards';

import type {ReactElement, ReactNode} from 'react';

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

function CarouselCard(props: {index: number; children: ReactNode}): ReactElement {
	const [hasBeenDiscovered, set_hasBeenDiscovered] = useState(false);
	const {selectedIndex} = useCarousel();

	useEffect(() => {
		if (props.index <= selectedIndex) {
			set_hasBeenDiscovered(true);
		}
	}, [selectedIndex, props.index]);

	return (
		<AnimatePresence mode={'popLayout'}>
			<motion.div
				key={selectedIndex}
				variants={cardAnimation}
				initial={'initial'}
				animate={'animate'}
				className={props.index <= selectedIndex || hasBeenDiscovered ? 'visible' : 'invisible'}>
				{props.children}
			</motion.div>
		</AnimatePresence>
	);
}

export function Carousel(props: {cards: TCardData[]; profile?: string}): ReactElement {
	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${domain}/${props.profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [props.profile]);

	return (
		<div className={'relative'}>
			<div className={'relative z-10 w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
					{[...props.cards, {id: 'swapaholic', data: {}}].map((_, index) => (
						<CarouselItem
							key={index}
							className={'h-screen w-screen md:h-[655px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
							<CarouselCard index={index}>
								{index < props.cards.length ? (
									getCardComponent(props.cards[index].id, props.cards[index].data)
								) : (
									<div className={'relative max-sm:mb-40'}>
										<DegenElderCard
											topRatio={20}
											width={440} // width={440}
											// timestamp={'1312312'}
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
