import {type HTMLAttributes, type ReactElement, useMemo} from 'react';
import {motion} from 'framer-motion';

import {Card} from './Card';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

export type TVolumeRankCardProps = {
	percentile: string;
	kind: 'swap' | 'bridge';
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

export default function VolumeRankCard(props: TVolumeRankCardProps): ReactElement {
	const cardVariant = useMemo(() => {
		return Number(props.percentile) <= 0.5 ? 'Green' : 'Purple';
	}, [props.percentile]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stat/backgroundVolumeRank${cardVariant}.jpg)`}
			mobileBackgroundImage={`url(/cards/stat/backgroundVolumeRankMobile${cardVariant}.jpg)`}>
			<motion.div
				variants={titleAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'flex flex-col gap-2 pb-6 pt-2 text-center text-black'}>
				<b
					className={cl(
						'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]',
						cardVariant === 'Green' ? 'text-[#000000]' : 'text-[#FFFFFF]'
					)}>
					{`${props.kind === 'swap' ? 'Swap rank' : 'Bridge rank'}`}
				</b>
			</motion.div>

			<motion.div
				variants={contentAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'mt-auto'}>
				<div className={cl(cardVariant === 'Green' ? 'text-[#000000]' : 'text-[#FFFFFF]')}>
					<b className={cl('block text-center text-[40px] leading-[4px]', fontThunder.className)}>{'TOP'}</b>
					<b className={cl('block text-center text-[200px] leading-[200px] pt-6', fontThunder.className)}>
						{`${(Number(props.percentile) * 100).toFixed(0)}%`}
					</b>
				</div>
			</motion.div>

			<motion.div
				variants={copyAnimation}
				initial={'initial'}
				animate={'animate'}
				className={'mt-auto flex items-center justify-center pt-6 text-center'}>
				<p
					className={cl(
						'font-space-grotesk text-2xl font-medium',
						cardVariant === 'Green' ? 'text-[#000000]' : 'text-[#FFFFFF]'
					)}>
					{'Copy copy copy'}
				</p>
			</motion.div>
		</Card>
	);
}
