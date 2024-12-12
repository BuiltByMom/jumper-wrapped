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
			case 'Monday':
			case 'Tuesday':
				return 'backgroundWeekDayMonTue';
			case 'Wednesday':
				return 'backgroundWeekDayWed';
			case 'Thursday':
			case 'Friday':
				return 'backgroundWeekDayThuFri';
			case 'Saturday':
			case 'Sunday':
				return 'backgroundWeekDaySatSun';
			default:
				return 'backgroundWeekDaySatSun';
		}
	};

	const getCopy = (dayOfWeek: TDayOfWeek): ReactElement => {
		switch (dayOfWeek) {
			case 'Monday':
			case 'Tuesday':
				return (
					<p className={'z-50 text-center text-lg font-medium text-white md:text-xl'}>
						{'While normie no-coiners fear the start of the week, you’re diving straight in. No chart is '}
						{'safe. Fair play to ya.'}
					</p>
				);
			case 'Wednesday':
				return (
					<p className={'z-50 text-center text-lg font-medium text-white md:text-xl'}>
						{'Humpday?'}
						<br />
						{'More like pump day for you ser.'}
					</p>
				);
			case 'Thursday':
			case 'Friday':
				return (
					<p className={'z-50 text-center text-lg font-medium text-white md:text-xl'}>
						{'A thirsty little end to the week.'}
						<br />
						{' Ain’t no FOMO with you is there…'}
						<br />
						{'Woof woof.'}
					</p>
				);
			case 'Saturday':
			case 'Sunday':
				return (
					<p className={'z-50 text-center text-lg font-medium text-white md:text-xl'}>
						{'Who needs rest. Not you.'}
						<br />
						{'While losers spend time with their families, you’re securing those '}
						{'gains.'}
					</p>
				);
			default:
				return <p></p>;
		}
	};

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/${getBackgroundImage(dayOfWeek)}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/${getBackgroundImage(dayOfWeek)}Mobile.jpg)`}>
			<CardTitle>
				<p className={'z-50 text-center text-3xl font-bold uppercase leading-8 text-white md:text-[32px]'}>
					{'Most traded day of the week'}
				</p>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex flex-col items-center justify-center'}>
					<p
						className={cl(
							' text-white text-center text-[160px] leading-[160px] md:text-[192px] font-bold uppercase md:leading-[192px]',
							fontThunder.className
						)}>
						{dayOfWeek.slice(0, 3)}
					</p>
				</div>
			</CardContent>

			<CardCopy>{getCopy(dayOfWeek)}</CardCopy>
		</Card>
	);
}
