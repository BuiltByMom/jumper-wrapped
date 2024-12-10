import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

/************************************************************************************************
 * Placeholder Card
 * Used as a temporary replacement for cards still in development
 ************************************************************************************************/
type TPlaceholderCardProps = {
	title?: string;
	content?: string;
	copy?: string;
} & TBaseCardProps;

export default function PlaceholderCard({
	title = 'Coming Soon',
	content = 'This card is under construction',
	copy = 'Stay tuned for updates!',
	...props
}: TPlaceholderCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundDay.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundDayMobile.jpg)'}>
			<CardTitle className={'text-white'}>
				<b className={'font-urbanist text-[32px] font-bold uppercase leading-8'}>{title}</b>
			</CardTitle>

			<CardContent className={'flex items-center justify-center'}>
				<p className={'text-center text-xl font-medium text-white'}>{content}</p>
			</CardContent>

			<CardCopy>
				<p className={'font-urbanist text-xl font-medium text-white'}>{copy}</p>
			</CardCopy>
		</Card>
	);
}
