import Image from 'next/image';

import {Card} from './Card';
import {fontMonth} from './Month';

import type {HTMLAttributes, ReactElement} from 'react';

import {cl} from '@/components/utils/tools';

type TDayCardProps = {
	day: string;
	month: string;
} & HTMLAttributes<HTMLDivElement>;

export default function DayCard(props: TDayCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundDay.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundDayMobile.jpg)'}>
			<>
				<p className={'z-50 w-[392px] text-center text-[40px] font-bold uppercase leading-[40px]'}>
					{'On this day you went full ape mode.'}
				</p>
				<div className={'relative z-50 h-[360px] w-[440px]'}>
					<Image
						src={'/cards/stat/dayBox.png'}
						alt={'backgroundDay'}
						width={616}
						height={616}
						className={'size-full object-contain'}
					/>
					<p
						className={cl(
							'absolute left-1/2 top-[60px] z-50 -translate-x-1/2',
							'text-center text-[48px] font-bold uppercase leading-[48px]',
							'text-[#0064FF]',
							fontMonth.className
						)}>
						{props.month.slice(0, 3)}
					</p>
					<p
						className={cl(
							'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-center text-[192px] font-bold uppercase leading-[192px]',
							fontMonth.className
						)}>
						{props.day}
					</p>
				</div>

				<div className={'mt-auto flex items-center justify-center text-center'}>
					<p className={'z-50 w-[392px] text-center text-2xl font-medium'}>
						{'The market felt your weighty presence.'}
					</p>
				</div>
			</>
		</Card>
	);
}
