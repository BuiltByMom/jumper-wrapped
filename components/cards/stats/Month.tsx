import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Month Card Props
 * Displays the month with the highest activity
 ************************************************************************************************/
type TMonthCardProps = {
	month: string;
} & TBaseCardProps;

/************************************************************************************************
 * Month Card Constants
 * Defines seasonal colors and month groupings for visual theming
 * - Each season has a distinct color theme
 * - Months are grouped by meteorological seasons
 ************************************************************************************************/
const COLORS = {
	Winter: '#00FFFF',
	Spring: '#8F00FF',
	Summer: '#00FFB2',
	Autumn: '#FFC700'
} as const;

const WINTER_MONTHS = ['December', 'January', 'February'] as const;
const SPRING_MONTHS = ['March', 'April', 'May'] as const;
const SUMMER_MONTHS = ['June', 'July', 'August'] as const;
const AUTUMN_MONTHS = ['September', 'October', 'November'] as const;

/************************************************************************************************
 * Month to Season Conversion
 * Maps a given month to its corresponding season
 * @param month - The month name to convert
 * @returns The season name (Winter, Spring, Summer, or Autumn)
 ************************************************************************************************/
const monthToSeason = (month: string): string => {
	return WINTER_MONTHS.includes(month as (typeof WINTER_MONTHS)[number])
		? 'Winter'
		: SPRING_MONTHS.includes(month as (typeof SPRING_MONTHS)[number])
		? 'Spring'
		: SUMMER_MONTHS.includes(month as (typeof SUMMER_MONTHS)[number])
		? 'Summer'
		: AUTUMN_MONTHS.includes(month as (typeof AUTUMN_MONTHS)[number])
		? 'Autumn'
		: 'Winter';
};

/************************************************************************************************
 * Get Season Configuration
 * Retrieves the color and season name for a given month
 * @param month - The month to get configuration for
 * @returns Object containing color and season name
 ************************************************************************************************/
const getSeason = (month: string): {color: string; season: string} => {
	const season = monthToSeason(month);
	return {color: COLORS[season as keyof typeof COLORS], season};
};

/************************************************************************************************
 * Month Card Component
 * Displays a month with seasonal theming and animations
 * Features:
 * - Dynamic seasonal colors and backgrounds
 * - Large month abbreviation display
 * - Full month name subtitle
 * - Responsive layout with mobile optimization
 * - Seasonal background images
 ************************************************************************************************/
export default function MonthCard({month, ...props}: TMonthCardProps): ReactElement {
	const {color, season} = getSeason(month);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundMonth${season}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundMonth${season}Mobile.jpg)`}>
			<CardTitle className={'absolute top-28 max-sm:top-36'}>
				<p
					style={{color}}
					className={cl('text-[320px] font-bold uppercase leading-[200px]', fontThunder.className)}>
					{month.slice(0, 3)}
				</p>
			</CardTitle>

			<CardContent className={'absolute top-[18%] flex h-[67px] w-full justify-center'}>
				<p className={cl('uppercase text-[96px] font-bold leading-[96px] text-white', fontThunder.className)}>
					{month}
				</p>
			</CardContent>

			<CardCopy className={'mx-auto mt-auto w-full text-center'}>
				<p className={'text-2xl font-bold leading-[40px] text-white'}>
					<span className={'uppercase'}>{month}</span>
					{" was your crypto marathon. Who needs sleep when you're chasing gains?"}
				</p>
			</CardCopy>
		</Card>
	);
}
