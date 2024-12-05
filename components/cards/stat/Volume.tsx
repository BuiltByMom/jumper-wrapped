import {type HTMLAttributes, type ReactElement, useMemo} from 'react';
import {motion} from 'framer-motion';

import {Card} from './Card';

import {cl} from '@/components/utils/tools';

export type TVolumeCardProps = {
	volume: string;
	percentile: string;
	kind: 'swap' | 'bridge';
} & HTMLAttributes<HTMLDivElement>;

const padsConfig = [
	{
		gradientClasses: 'from-[#FAA322] to-[#FEED23]',
		textClasses: 'text-[72px] font-bold leading-[72px]'
	},
	{
		gradientClasses: 'from-[#DF1006] to-[#FE764D]',
		textClasses: 'text-white text-[72px] font-bold leading-[72px]'
	},
	{
		gradientClasses: 'from-[#12522D] to-[#19A256]',
		textClasses: 'text-[#FFE55C] text-[72px] font-bold leading-[72px]'
	},
	{
		gradientClasses: 'from-[#162EE8] to-[#3D94FB]',
		textClasses: 'text-[#7EF6E8] text-[72px] font-bold leading-[72px]'
	}
];

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

function VolumePads({value}: {value: string}): ReactElement {
	return (
		<div>
			{padsConfig.map(({gradientClasses, textClasses}, index) => (
				<div
					key={index}
					className={cl(
						'rounded-2xl min-w-[296px] flex justify-center border px-8 py-2 border-[#FDDE2C] bg-gradient-to-r',
						gradientClasses,
						'[box-shadow:0px_8px_0px_0px_#FBB42D]'
					)}>
					<p className={textClasses}>{value}</p>
				</div>
			))}
		</div>
	);
}

export default function VolumeCard(props: TVolumeCardProps): ReactElement {
	const formattedVolume = useMemo(() => {
		const volume = Number(Number(props.volume).toFixed(0));
		if (volume >= 100_000 && volume < 1_000_000) {
			return `$${Math.floor(volume / 1_000)}k`;
		}
		if (volume >= 1_000_000) {
			return `$${(volume / 1_000_000).toFixed(1)}M`;
		}
		return `$${volume.toLocaleString()}`;
	}, [props.volume]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stat/backgroundVolume${
				Number(props.percentile) <= 50 ? 'Green' : 'Purple'
			}.jpg)`}
			mobileBackgroundImage={`url(/cards/stat/backgroundVolumeMobile${
				Number(props.percentile) <= 50 ? 'Green' : 'Purple'
			}.jpg)`}>
			<>
				<motion.div
					variants={titleAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'flex flex-col gap-2 pb-6 pt-2 text-center text-black'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>{'Ur volume'}</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>
						{`Putting you in the top ${props.percentile}%`}
					</p>
				</motion.div>

				<motion.div
					variants={contentAnimation}
					initial={'initial'}
					animate={'animate'}>
					<VolumePads value={formattedVolume} />
				</motion.div>

				<motion.div
					variants={copyAnimation}
					initial={'initial'}
					animate={'animate'}
					className={'mt-auto flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-black'}>
						{'Which makes you a bit of a chad, LFG.'}
					</p>
				</motion.div>
			</>
		</Card>
	);
}
