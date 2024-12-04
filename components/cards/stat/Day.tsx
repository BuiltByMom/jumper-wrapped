import Image from 'next/image';

import {fontMonth, monthMap} from './Month';

import type {HTMLAttributes, ReactElement} from 'react';

import {cl} from '@/components/utils/tools';

type TDayCardProps = {
	day: string;
	month: string;
} & HTMLAttributes<HTMLDivElement>;

export default function DayCard(props: TDayCardProps): ReactElement {
	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<p
				className={
					'absolute left-1/2 top-[32px] z-50 w-[392px] -translate-x-1/2 text-center text-[40px] font-bold uppercase leading-[40px]'
				}>
				{`On ${monthMap[props.month as keyof typeof monthMap]} ${props.day}, you went full ape mode.`}
			</p>
			<div className={'absolute left-1/2 top-[152px] z-50 h-[360px] w-[440px] -translate-x-1/2'}>
				<p
					className={cl(
						'absolute left-1/2 top-[60px] z-50 -translate-x-1/2 text-center text-[48px] font-bold uppercase leading-[48px] text-[#0064FF]',
						fontMonth.className
					)}>
					{monthMap[props.month as keyof typeof monthMap]}
				</p>
				<p
					className={cl(
						'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-center text-[192px] font-bold uppercase leading-[192px]',
						fontMonth.className
					)}>
					{props.day}
				</p>
				<Image
					src={'/cards/stat/dayBox.png'}
					alt={'backgroundDay'}
					width={616}
					height={616}
					className={'size-full object-contain'}
				/>
			</div>
			<p
				className={
					'absolute bottom-[24px] left-1/2 z-50 w-[392px] -translate-x-1/2 text-center text-2xl font-medium'
				}>
				{'The market felt your weighty presence.'}
			</p>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/stat/backgroundDay.jpg)'}}
			/>
		</div>
	);
}
