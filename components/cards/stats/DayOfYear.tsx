import {type ReactElement} from 'react';
import Image from 'next/image';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Day of Year Card Props
 * Displays the day with the highest activity, converting from day number (1-365) to date
 ************************************************************************************************/
type TDayCardProps = {
	dayOfYear: string;
} & TBaseCardProps;

/************************************************************************************************
 * Day of Year Card Component
 * Shows the most active day of the year with a calendar-style display
 * - Converts day number to actual date
 * - Shows month in abbreviated form at top
 * - Shows day number prominently in the middle
 * - Includes decorative calendar box background
 ************************************************************************************************/
export default function DayOfYearCard({dayOfYear, ...props}: TDayCardProps): ReactElement {
	const date = new Date(2024, 0, 1); // Start with January 1, 2024
	date.setDate(Number(dayOfYear)); // Add days
	const day = date.getDate().toString();
	const month = date.toLocaleString('en-US', {month: 'long'});

	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundDay.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundDayMobile.jpg)'}>
			<CardTitle>
				<p className={'z-50 text-center text-[40px] font-bold uppercase leading-[40px]'}>
					{'On this day you went full ape mode.'}
				</p>
			</CardTitle>

			<CardContent className={'relative z-50 h-[360px] w-[440px]'}>
				<Image
					src={'/cards/stats/dayBox.png'}
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
						fontThunder.className
					)}>
					{month.slice(0, 3)}
				</p>
				<p
					className={cl(
						'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-center text-[192px] font-bold uppercase leading-[192px]',
						fontThunder.className
					)}>
					{day}
				</p>
			</CardContent>

			<CardCopy>
				<p className={'z-50 text-center text-2xl font-medium'}>{'The market felt your weighty presence.'}</p>
			</CardCopy>
		</Card>
	);
}
