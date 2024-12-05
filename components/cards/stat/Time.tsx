import {type HTMLAttributes, type ReactElement, useMemo} from 'react';
import localFont from 'next/font/local';
import {motion} from 'framer-motion';

import {Card} from './Card';

import {cl} from '@/components/utils/tools';

const fontTime = localFont({
	src: '../../../public/fonts/dsFont.ttf',
	weight: '400',
	style: 'normal'
});

type TTimeCardProps = {
	timestamp: string;
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

const timeAnimation = {
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

export default function TimeCard({timestamp, ...props}: TTimeCardProps): ReactElement {
	const [time, amOrPm, dayOrNight] = useMemo((): [string, string, string] => {
		const date = new Date(Number(timestamp) * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();

		// Format time as HH:MM
		const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

		// Determine AM/PM
		const amPm = hours >= 12 ? 'PM' : 'AM';

		// Determine day/night (night is between 20:00 and 08:00)
		const isNight = hours >= 20 || hours < 8;
		const timeOfDay = isNight ? 'NIGHT' : 'DAY';

		return [formattedTime, amPm, timeOfDay];
	}, [timestamp]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stat/${
				dayOrNight === 'NIGHT' ? 'backgroundTimeNight' : 'backgroundTimeDay'
			}.jpg)`}
			mobileBackgroundImage={`url(/cards/stat/${
				dayOrNight === 'NIGHT' ? 'backgroundTimeNightMobile' : 'backgroundTimeDayMobile'
			}.jpg)`}>
			<>
				<motion.div
					variants={titleAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'flex flex-col gap-2 pb-6 pt-2 text-center text-white'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
						{'Wen trade?'}
					</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>{'You traded most at'}</p>
				</motion.div>

				<motion.div
					variants={timeAnimation}
					initial={'initial'}
					animate={'animate'}
					className={cl(
						'relative w-[320px] md:w-[392px]',
						'flex aspect-[392/192] w-full items-center justify-center rounded-2xl border-8',
						'border-[#7AFFB2] text-[#009E5C]'
					)}
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #7AFFA7 0%, #47FF86 100%)',
						boxShadow: '0px 0px 32px 0px #62FF9766'
					}}>
					<div className={'flex flex-col items-center'}>
						<b
							className={cl(
								'text-center text-[120px] md:text-[160px] leading-[120px] md:leading-[144px] font-bold tabular-nums tracking-wider',
								fontTime.className
							)}>
							{time}
						</b>
						<span
							className={`font-space-grotesk absolute right-4 top-0.5 text-[40px] font-bold leading-[36px] ${fontTime.className}`}>
							{amOrPm}
						</span>
					</div>
				</motion.div>

				<motion.div
					variants={copyAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'mt-20 flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-white'}>
						{'Chasing gains, sniping bags or trawling pump.fun?'}
					</p>
				</motion.div>
			</>
		</Card>
	);
}
