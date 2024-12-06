import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

type TNumberOfTradeCardProps = {
	count: number;
} & TBaseCardProps;

export default function NumberOfTradeCard({count, ...props}: TNumberOfTradeCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundNumberTrade.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundNumberTradeMobile.jpg)'}>
			<CardTitle className={''}>
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{'Number of trades Headline'}
				</b>
			</CardTitle>

			<CardContent className={'mt-auto'}>
				{count >= 1000 ? (
					<b className={'font-space-grotesk text-center text-[112px] font-bold leading-[112px]'}>{count}</b>
				) : count >= 100 ? (
					<b className={'font-space-grotesk text-center text-[160px] font-bold leading-[160px]'}>{count}</b>
				) : (
					<b className={'font-space-grotesk text-center text-[200px] font-bold leading-[200px]'}>{count}</b>
				)}
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-space-grotesk text-2xl font-medium'}>
					{'Copy copy copy copy copy copy copy copy copy copy copy'}
				</p>
			</CardCopy>
		</Card>
	);
}
