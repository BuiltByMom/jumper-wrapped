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
				<p className={'z-50 text-center text-[32px] font-bold uppercase leading-8'}>
					{'On this day you went full ape mode.'}
				</p>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex w-full flex-col items-center justify-center text-center'}>
					<div className={'relative z-50 !flex h-[360px] w-[440px] !justify-center'}>
						<div className={'hidden md:block'}>
							<Image
								src={'/cards/stats/dayBox.png'}
								alt={'backgroundDay'}
								width={616}
								height={616}
								className={'size-full object-contain'}
							/>
						</div>
						<div className={'max-h-[320px] max-w-[320px] md:hidden'}>
							<Image
								src={'/cards/stats/dayBoxMobile.png'}
								alt={'backgroundDay'}
								width={300}
								height={300}
								className={'size-full object-contain'}
							/>
						</div>
						<p
							className={cl(
								'absolute left-1/2 top-[60px] z-50 -translate-x-1/2',
								'text-center text-[40px] font-bold uppercase leading-[40px] md:text-[48px] md:leading-[48px]',
								'text-[#0064FF]',
								fontThunder.className
							)}>
							{month.slice(0, 3)}
						</p>
						<p
							className={cl(
								'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-center text-[140px] font-bold uppercase leading-[140px] md:text-[192px] md:leading-[192px]',
								fontThunder.className
							)}>
							{day}
						</p>
					</div>
				</div>
			</CardContent>

			<CardCopy>
				<p className={'z-50 text-center text-xl font-medium'}>{'The market felt your weighty presence.'}</p>
			</CardCopy>
		</Card>
	);
}
