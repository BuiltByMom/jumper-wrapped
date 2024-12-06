import Link from 'next/link';
import {motion} from 'framer-motion';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

/************************************************************************************************
 * Popup Animation Configuration
 * Defines the animation for the popup's entrance and exit
 * - Slides up from bottom
 * - Fades in
 * - Spring animation for natural feel
 ************************************************************************************************/
const popupAnimation = {
	initial: {
		opacity: 0,
		y: 100,
		scale: 0.95
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 10,
			mass: 1,
			delay: 0.4
		}
	},
	exit: {
		opacity: 0,
		y: 50,
		scale: 0.95,
		transition: {
			duration: 0.2
		}
	}
};

/************************************************************************************************
 * Jumper Popup Component
 * Final slide popup showing user achievements
 * Features:
 * - Slide-up animation
 * - Hover effects
 * - Responsive design
 * - Call-to-action button
 ************************************************************************************************/
export function JumperPopup(): ReactElement {
	return (
		<motion.div
			variants={popupAnimation}
			initial={'initial'}
			animate={'animate'}
			exit={'exit'}
			className={cl(
				'absolute md:bottom-[99px] z-[1005] group max-sm:gap-2 left-1/2 -translate-x-1/2 md:left-auto',
				'md:-translate-x-0 bottom-2 md:right-10 flex md:w-[300px] md:size-60 flex-col',
				'justify-between rounded-[24px] border border-[#FFFFFF1A]',
				'p-4 backdrop-blur [box-shadow:0px_0px_80px_0px_#FFFFFF33_inset]',
				'hover:[box-shadow:0px_0px_80px_0px_#6120FD] hover:border-[#FFFFFF66]',
				'transition-[box-shadow,border-color] duration-300',
				'cursor-pointer'
			)}>
			<div className={'flex justify-between'}>
				<span className={'text-xl font-bold text-white'}>{'Anon'}</span>
				<IconJumperLogo />
			</div>
			<p className={'font-semibold text-white'}>
				{'Thank you for being a Jumper Chad! May your 2025 be just as bullish. WAGMI'}
			</p>
			<Link
				href={'https://jumper.exchange'}
				className={'w-full'}
				target={'_blank'}>
				<Button className={cl('!bg-white group-hover:!bg-accent-hover', 'w-full')}>
					<p className={'font-bold uppercase'}>{'Go to jumper'}</p>
				</Button>
			</Link>
		</motion.div>
	);
}
