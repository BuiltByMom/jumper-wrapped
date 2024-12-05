import Image from 'next/image';
import {motion} from 'framer-motion';

import {Card} from './Card';

import type {HTMLAttributes, ReactElement} from 'react';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

type TDayCardProps = {
	dayOfYear: string;
} & HTMLAttributes<HTMLDivElement>;

const animationConfig = {
	type: 'spring',
	bounce: 0.3,
	duration: 0.6,
	delay: 0.3,
	stiffness: 150,
	damping: 15
};

const titleAnimation = {
	initial: {y: -120, opacity: 0},
	animate: {
		y: 0,
		opacity: 1,
		transition: animationConfig
	}
};

const contentAnimation = {
	initial: {scale: 0.6, opacity: 0},
	animate: {
		scale: 1,
		opacity: 1,
		transition: animationConfig
	}
};

const copyAnimation = {
	initial: {y: 120, opacity: 0},
	animate: {
		y: 0,
		opacity: 1,
		transition: animationConfig
	}
};

export default function DayOfYearCard({dayOfYear, ...props}: TDayCardProps): ReactElement {
	const date = new Date(2024, 0, 1); // Start with January 1, 2024
	date.setDate(Number(dayOfYear)); // Add days
	const day = date.getDate().toString();
	const month = date.toLocaleString('en-US', {month: 'long'});

	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundDay.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundDayMobile.jpg)'}>
			<>
				<motion.p
					variants={titleAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'z-50 w-[392px] text-center text-[40px] font-bold uppercase leading-[40px]'}>
					{'On this day you went full ape mode.'}
				</motion.p>

				<motion.div
					variants={contentAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'relative z-50 h-[360px] w-[440px]'}>
					<Image
						src={'/cards/stat/dayBox.png'}
						alt={'backgroundDay'}
						width={616}
						height={616}
						className={'size-full object-contain'}
					/>
					<p
						className={cl(
							'absolute left-1/2 top-[60px] z-50 -translate-x-1/2',
							'text-center text-[48px] font-bold uppercase leading-[48px]',
							'text-[#0064FF]',
							fontThunder.className
						)}>
						{month.slice(0, 3)}
					</p>
					<p
						className={cl(
							'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-center text-[192px] font-bold uppercase leading-[192px]',
							fontThunder.className
						)}>
						{day}
					</p>
				</motion.div>

				<motion.div
					variants={copyAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'mt-auto flex items-center justify-center text-center'}>
					<p className={'z-50 w-[392px] text-center text-2xl font-medium'}>
						{'The market felt your weighty presence.'}
					</p>
				</motion.div>
			</>
		</Card>
	);
}
