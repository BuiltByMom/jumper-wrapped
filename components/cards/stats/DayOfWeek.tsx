/************************************************************************************************
 * Day of Week Card Component
 * Displays a stylized card showing the current day of the week
 * Features:
 * - Dynamic background based on day grouping
 * - Three-letter day abbreviation display
 * - Responsive layout with mobile/desktop backgrounds
 * - Thunder font for main day display
 *
 * Props:
 * - dayOfWeek: Current day (Monday-Sunday)
 * - ...TBaseCardProps: Base card properties
 ************************************************************************************************/

import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Day of Week Type Definition
 * Defines valid days of the week for type safety
 * Used to ensure only valid day values are passed to the component
 ************************************************************************************************/
export type TDayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type TDayCardProps = {
	dayOfWeek: TDayOfWeek;
} & TBaseCardProps;

export default function DayOfWeekCard({dayOfWeek, ...props}: TDayCardProps): ReactElement {
	/************************************************************************************************
	 * Background Image Selection
	 * Determines appropriate background image based on day of week
	 * Groups days with similar backgrounds:
	 * - Monday/Tuesday
	 * - Wednesday/Thursday
	 * - Friday (unique)
	 * - Saturday/Sunday
	 * Returns image name for both mobile and desktop versions
	 ************************************************************************************************/
	const getBackgroundImage = (dayOfWeek: TDayOfWeek): string => {
		switch (dayOfWeek) {
			case 'Monday' || 'Tuesday':
				return 'backgroundWeekDayMonTue';
			case 'Wednesday' || 'Thursday':
				return 'backgroundWeekDayWedThu';
			case 'Friday':
				return 'backgroundWeekDayFri';
			case 'Saturday' || 'Sunday':
				return 'backgroundWeekDaySatSun';
		}

		return 'backgroundWeekDaySatSun';
	};

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/${getBackgroundImage(dayOfWeek)}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/${getBackgroundImage(dayOfWeek)}Mobile.jpg)`}>
			<CardTitle>
				<p className={'z-50 w-[392px] text-center text-[40px] font-bold uppercase leading-[40px] text-white'}>
					{dayOfWeek.slice(0, 3)}
				</p>
			</CardTitle>

			<CardContent className={'relative z-50 h-[360px] w-[440px]'}>
				<p
					className={cl(
						'absolute left-1/2 top-[130px] z-50 -translate-x-1/2 text-white text-center text-[192px] font-bold uppercase leading-[192px]',
						fontThunder.className
					)}>
					{dayOfWeek.slice(0, 3)}
				</p>
			</CardContent>

			<CardCopy>
				<p className={'z-50 w-[392px] text-center text-2xl font-medium text-white'}>{'Copy copy copy copy.'}</p>
			</CardCopy>
		</Card>
	);
}
