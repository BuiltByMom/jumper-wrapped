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
				<b className={'font-urbanist text-[32px] font-bold uppercase leading-8'}>{'Number of transactions'}</b>
			</CardTitle>

			<CardContent className={'mt-auto'}>
				{count >= 1000 ? (
					<b className={'font-urbanist text-center text-[112px] font-bold leading-[112px]'}>{count}</b>
				) : count >= 100 ? (
					<b className={'font-urbanist text-center text-[160px] font-bold leading-[160px]'}>{count}</b>
				) : (
					<b className={'font-urbanist text-center text-[200px] font-bold leading-[200px]'}>{count}</b>
				)}
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium'}>
					{count <= 10
						? 'Wouldn’t say those are whale numbers just yet ser. But fear not, ya got the whole of 2025 to cook up some tasty txns.'
						: 'Jeeeeeeeez. anon been putting the work in. lfg Ser Chadingtons of Gigatron.'}
				</p>
			</CardCopy>
		</Card>
	);
}
