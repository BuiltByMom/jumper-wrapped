import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

/************************************************************************************************
 * Day of Year Card Props
 * Displays the day with the highest activity, converting from day number (1-365) to date
 ************************************************************************************************/
type TWashTradeCardProps = TBaseCardProps;

/************************************************************************************************
 * Day of Year Card Component
 * Shows the most active day of the year with a calendar-style display
 * - Converts day number to actual date
 * - Shows month in abbreviated form at top
 * - Shows day number prominently in the middle
 * - Includes decorative calendar box background
 ************************************************************************************************/
export default function WashTradeCard(props: TWashTradeCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundWashTrade.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundWashTradeMobile.jpg)'}>
			<CardTitle>
				<p className={'z-50 text-center text-[32px] font-bold uppercase leading-8 text-white'}>
					{'Wash trade headline'}
				</p>
			</CardTitle>

			<CardCopy>
				<p className={'z-50 mt-auto text-center text-xl font-medium text-white'}>
					{'Copy copy copy copy copy copy copy copy copy'}
				</p>
			</CardCopy>
		</Card>
	);
}
