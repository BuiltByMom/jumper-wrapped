import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

/************************************************************************************************
 * Top Bridge Chain Card Props
 * Displays user's most used blockchain for bridging
 ************************************************************************************************/
type TChainExploredCardProps = {
	amountOfChains: number;
	topRatio: number;
} & TBaseCardProps;

export default function ChainExploredCard({amountOfChains, topRatio, ...props}: TChainExploredCardProps): ReactElement {
	const rank = (topRatio * 100).toFixed(topRatio < 0.01 ? 1 : 0);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundChainExpl${amountOfChains < 6 ? 'Few' : 'Alot'}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundChainExpl${
				amountOfChains < 6 ? 'Few' : 'Alot'
			}Mobile.jpg)`}>
			<CardTitle className={''}>
				<b className={'font-urbanist text-3xl font-bold uppercase leading-8 md:text-[32px]'}>
					{amountOfChains < 6
						? 'You need to touch grass a little less and bridge more anon'
						: 'Wow, look at you, you little multi chain adventurer!'}
				</b>
			</CardTitle>

			<CardContent>
				<div
					className={
						'absolute inset-0 -mt-12 flex w-full flex-col items-center justify-center text-center md:mt-0'
					}>
					<p className={'text-[160px] font-bold leading-[160px] md:text-[200px] md:leading-[200px]'}>
						{amountOfChains}
					</p>
					<p className={'w-full text-[40px] font-bold leading-[20px]'}>{'chains explored'}</p>
				</div>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium'}>
					{`You sit in the ${rank}% percentile of Jumper users.`}
				</p>
			</CardCopy>
		</Card>
	);
}
