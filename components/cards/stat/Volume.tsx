import {type HTMLAttributes, type ReactElement, useMemo} from 'react';

import {cl} from '@/components/utils/tools';

export type TVolumeCardProps = {
	volume: number;
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
	const raitingPercentage = 5;
	const formattedVolume = useMemo(() => {
		if (props.volume >= 100_000 && props.volume < 1_000_000) {
			return `$${Math.floor(props.volume / 1_000)}k`;
		}
		if (props.volume >= 1_000_000) {
			return `$${(props.volume / 1_000_000).toFixed(1)}M`;
		}
		return `$${props.volume.toLocaleString()}`;
	}, [props.volume]);

	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<div className={'relative z-50 flex size-full flex-col items-center p-6'}>
				<div className={'flex flex-col gap-2 pb-6 pt-2 text-center text-black'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>{'Ur volume'}</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>
						{`Putting you in the top ${raitingPercentage}%`}
					</p>
				</div>

				<VolumePads value={formattedVolume} />

				<div className={'mt-auto flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-black'}>
						{'Which makes you a bit of a chad, LFG.'}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{
					backgroundImage: `url(/cards/stat/backgroundVolume${
						props.volume < 1_000_000 ? 'Green' : 'Purple'
					}.jpg)`
				}}
			/>
		</div>
	);
}
