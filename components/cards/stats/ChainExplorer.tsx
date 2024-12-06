import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

/************************************************************************************************
 * Top Bridge Chain Card Props
 * Displays user's most used blockchain for bridging
 ************************************************************************************************/
type TChainExplorerCardProps = {
	amountOfChains: number;
	topRatio: number;
} & TBaseCardProps;

export default function ChainExplorerCard({amountOfChains, topRatio, ...props}: TChainExplorerCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundChainExpl${amountOfChains < 6 ? 'Few' : 'Alot'}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundChainExpl${
				amountOfChains < 6 ? 'Few' : 'Alot'
			}Mobile.jpg)`}>
			<CardTitle className={''}>
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{amountOfChains < 6
						? 'You need to touch grass a little less and bridge more anon'
						: 'Wow, look at you, you little multi chain adventurer!'}
				</b>
			</CardTitle>

			<CardContent
				className={'relative mt-auto flex aspect-square  items-center justify-center pb-8 md:mt-auto md:pb-0'}>
				<div className={'flex w-full flex-col items-center justify-center'}>
					<p className={'text-[200px] font-bold leading-[200px]'}>{amountOfChains}</p>
					<p className={'min-w-full text-[40px] font-bold leading-[40px]'}>{'chains explored'}</p>
				</div>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-space-grotesk text-2xl font-medium'}>
					{`${topRatio ?? 0}% of where sit within others users`}
				</p>
			</CardCopy>
		</Card>
	);
}
