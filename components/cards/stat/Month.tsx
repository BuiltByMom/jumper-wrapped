import {motion} from 'framer-motion';

import {Card} from './Card';

import type {HTMLAttributes, ReactElement} from 'react';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

export type TMonthCardProps = {
	month: string;
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

const monthAnimation = {
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

export default function MonthCard(props: TMonthCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundMonth.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundMonthMobile.jpg)'}>
			<>
				<motion.div
					variants={titleAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'absolute top-28 max-sm:top-36'}>
					<p
						className={cl(
							'text-[320px] font-bold uppercase leading-[200px] text-[#00FFB2]',
							fontThunder.className
						)}>
						{props.month.slice(0, 3)}
					</p>
				</motion.div>

				<motion.div
					variants={monthAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'absolute left-[27%] top-[18%] h-[67px] w-[197px] -translate-x-1/2 -translate-y-1/2'}>
					<p
						className={cl(
							'uppercase text-[96px] font-bold leading-[96px] text-white',
							fontThunder.className
						)}>
						{props.month}
					</p>
				</motion.div>

				<motion.div
					variants={copyAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'mx-auto mt-auto w-full text-center'}>
					<p className={'text-2xl font-bold leading-[40px] text-white'}>
						<span className={'uppercase'}>{props.month}</span>
						{" was your crypto marathon. Who needs sleep when you're chasing gains?"}
					</p>
				</motion.div>
			</>
		</Card>
	);
}
