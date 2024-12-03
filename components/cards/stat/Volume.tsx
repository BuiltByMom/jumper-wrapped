import type {HTMLAttributes, ReactElement, ReactNode} from 'react';

import {cl} from '@/components/utils/tools';

export type TVolumeCardProps = {
	children: ReactNode;
	variant: 'Green' | 'Purple';
} & HTMLAttributes<HTMLDivElement>;
export default function VolumeCard(props: TVolumeCardProps): ReactElement {
	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<div className={'relative z-50 flex size-full flex-col items-center p-6'}>
				<div className={'flex flex-col gap-2 pb-6 pt-2 text-center text-black'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>{'Ur volume'}</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>{'Putting you in the top 100%'}</p>
				</div>

				{props.children}

				<div className={'mt-auto flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-black'}>
						{'Which makes you a bit of a chad, LFG.'}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: `url(/cards/stat/backgroundVolume${props.variant}.jpg)`}}
			/>
		</div>
	);
}
