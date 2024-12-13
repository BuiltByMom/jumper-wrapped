import Link from 'next/link';
import {motion} from 'motion/react';

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
		<div
			className={
				'bottom-2 z-[1005] -mt-4 px-6 max-md:mx-auto max-md:w-screen max-md:pb-10 md:absolute md:bottom-[99px] md:right-10 md:mt-0 md:px-0'
			}>
			<motion.div
				variants={popupAnimation}
				initial={'initial'}
				animate={'animate'}
				exit={'exit'}
				className={cl(
					'group max-md:gap-2 md:left-auto',
					'lg:h-60 lg:w-80',
					'md:h-60 md:w-60',
					'md:-translate-x-0 flex flex-col',
					'justify-between rounded-[24px] border border-[#FFFFFF1A]',
					'pt-6 pb-4 px-4 backdrop-blur [box-shadow:0px_0px_80px_0px_#FFFFFF33_inset]',
					'hover:[box-shadow:0px_0px_80px_0px_#6120FD] hover:border-[#FFFFFF66]',
					'transition-[box-shadow,border-color] duration-300',
					'cursor-pointer'
				)}>
				<div className={'flex items-center justify-between'}>
					<span className={'text-xl font-bold text-white'}>{'Anon'}</span>
					<IconJumperLogo className={'h-6'} />
				</div>
				<p className={'font-semibold text-white'}>
					{'Thank you for being a Jumper Chad! May your 2025 be just as bullish. WAGMI'}
				</p>
				<Link
					href={'https://jumper.exchange'}
					className={'w-full max-md:mt-12'}
					target={'_blank'}>
					<Button
						className={cl(
							'!bg-white group-hover:!bg-accent-hover group-hover:text-white !xl:rounded-[32px] !h-10',
							'w-full'
						)}>
						<p className={'font-bold uppercase'}>{'Go to jumper'}</p>
					</Button>
				</Link>
			</motion.div>
		</div>
	);
}
