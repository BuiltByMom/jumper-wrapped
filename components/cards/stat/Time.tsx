import type {HTMLAttributes, ReactElement, ReactNode} from 'react';

import {cl} from '@/components/utils/tools';

export type TTimeCardProps = {
	children: ReactNode;
	variant: 'Day' | 'Night';
} & HTMLAttributes<HTMLDivElement>;
export default function TimeCard(props: TTimeCardProps): ReactElement {
	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<div className={'relative z-50 flex size-full flex-col items-center p-6'}>
				<div className={'flex flex-col gap-2 pb-6 pt-2 text-center text-white'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
						{'Wen trade?'}
					</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>{'You traded most at'}</p>
				</div>

				{props.children}

				<div className={'mt-auto flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-white'}>
						{'Chasing gains, sniping bags or trawling pump.fun?'}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: `url(/cards/stat/backgroundTime${props.variant}.jpg)`}}
			/>
		</div>
	);
}
