import {type ReactElement, useMemo} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';
import {formatVolume, getCardVariant} from './utils';

import type {TBaseCardProps, TWithKind, TWithVolume} from './types';

import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Volume Card Configuration
 * Visual settings for the volume display pads
 ************************************************************************************************/
const padsConfig = [
	{
		gradientClasses: 'from-[#FAA322] to-[#FEED23]',
		textClasses: 'text-[48px] font-bold leading-[48px] md:leading-[72px] md:text-[72px]'
	},
	{
		gradientClasses: 'from-[#DF1006] to-[#FE764D]',
		textClasses: 'text-white text-[48px] font-bold leading-[48px] md:leading-[72px] md:text-[72px]'
	},
	{
		gradientClasses: 'from-[#12522D] to-[#19A256]',
		textClasses: 'text-[#FFE55C] text-[48px] font-bold leading-[48px] md:leading-[72px] md:text-[72px]'
	},
	{
		gradientClasses: 'from-[#162EE8] to-[#3D94FB]',
		textClasses: 'text-[#7EF6E8] text-[48px] font-bold leading-[48px] md:leading-[72px] md:text-[72px]'
	}
];

type TVolumeCardProps = TBaseCardProps & TWithVolume & TWithKind;

export default function VolumeCard(props: TVolumeCardProps): ReactElement {
	const cardVariant = useMemo(() => {
		return getCardVariant(props.percentile);
	}, [props.percentile]);

	const formattedVolume = useMemo(() => {
		return formatVolume(props.volume);
	}, [props.volume]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundVolume${cardVariant}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundVolumeMobile${cardVariant}.jpg)`}>
			<CardTitle>
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{`${props.kind === 'swap' ? 'Ur Swap Volume' : 'Ur Bridge Volume'}`}
				</b>
				<p className={'font-space-grotesk text-2xl font-medium'}>{'Whao, all this?!'}</p>
			</CardTitle>

			<CardContent>
				<VolumePads value={formattedVolume} />
			</CardContent>

			<CardCopy className={'!pt-6'}>
				<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-black'}>
					{'Which makes you a bit of a chad, LFG.'}
				</p>
			</CardCopy>
		</Card>
	);
}

function VolumePads({value}: {value: string}): ReactElement {
	return (
		<div className={'pt-6'}>
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
