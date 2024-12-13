import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';

import {useCarousel} from '../carouselContext';
import {cardAnimation} from './animations';

import type {ReactElement} from 'react';
import type {TCarouselCardProps} from './types';

/************************************************************************************************
 * Carousel Card Component
 * Handles individual card animations and visibility
 * Features:
 * - Progressive reveal based on carousel position
 * - Smooth enter/exit animations
 * - Discovery state tracking
 ************************************************************************************************/
export function CarouselCard({index, children}: TCarouselCardProps): ReactElement {
	const [hasBeenDiscovered, set_hasBeenDiscovered] = useState(false);
	const {selectedIndex} = useCarousel();

	useEffect(() => {
		if (index <= selectedIndex) {
			set_hasBeenDiscovered(true);
		}
	}, [selectedIndex, index]);

	return (
		<AnimatePresence mode={'popLayout'}>
			<motion.div
				key={selectedIndex}
				variants={cardAnimation}
				initial={'initial'}
				animate={'animate'}
				className={index <= selectedIndex || hasBeenDiscovered ? 'visible' : 'invisible'}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
