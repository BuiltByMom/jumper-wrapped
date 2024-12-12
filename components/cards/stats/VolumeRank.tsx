import {type ReactElement, useMemo} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';
import {getCardVariant} from './utils';

import type {TBaseCardProps, TWithKind} from './types';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Volume Rank Card Props
 * Shows user's ranking among all users based on volume
 ************************************************************************************************/
type TVolumeRankCardProps = {
	percentile: string;
} & TBaseCardProps &
	TWithKind;

export default function VolumeRankCard(props: TVolumeRankCardProps): ReactElement {
	const cardVariant = useMemo(() => getCardVariant(props.percentile), [props.percentile]);

	const cardCopy = useMemo(() => {
		if (cardVariant === 'Green') {
			return (
				<p className={cl('font-urbanist text-lg md:text-xl font-medium', 'text-black')}>
					{'Straight up chad right here'}
				</p>
			);
		}
		return (
			<p className={cl('font-urbanist text-lg md:text-xl font-medium', 'text-white')}>
				{'One smol step for anon. Every step counts.'}
			</p>
		);
	}, [cardVariant]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundVolumeRank${cardVariant}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundVolumeRankMobile${cardVariant}.jpg)`}>
			<CardTitle>
				<b
					className={cl(
						'font-urbanist text-3xl font-urbanist md:text-[32px] leading-8 font-bold uppercase',
						cardVariant === 'Green' ? 'text-[#000000]' : 'text-[#FFFFFF]'
					)}>
					{`${props.kind === 'swap' ? 'Swap rank' : 'Bridge rank'}`}
				</b>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex flex-col items-center justify-center'}>
					<div className={cl(cardVariant === 'Green' ? 'text-[#000000]' : 'text-[#FFFFFF]')}>
						<b className={cl('block text-center text-[40px] leading-[4px]', fontThunder.className)}>
							{'TOP'}
						</b>
						<b
							className={cl(
								'block text-center text-[160px] leading-[160px] md:text-[200px] md:leading-[200px] pt-6',
								fontThunder.className
							)}>
							{`${(Number(props.percentile) * 100).toFixed(0)}%`}
						</b>
					</div>
				</div>
			</CardContent>

			<CardCopy>{cardCopy}</CardCopy>
		</Card>
	);
}
