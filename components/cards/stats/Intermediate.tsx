import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy} from './CardElements';

import type {TBaseCardProps} from './types';

type TIntermediateProps = {statsAmount: number} & TBaseCardProps;

const FEW_COPY = [
	{
		title: 'You’re just warming up, ser!',
		description: 'Your crypto journey has begun. Let’s peek at the final page of your story.'
	},
	{
		title: 'Small but mighty—your moves may be few, but few is better than none.',
		description: 'You gotta be in it to win it. Your profile awaits!'
	},
	{
		title: 'You’ve dipped your toes in the turbulent seas of crypto and that’s more than most',
		description: 'Keep that degen in you burning. The last card is right around the corner!'
	}
];

const ALOT_COPY = [
	{
		title: 'Swapping, bridging and aping like a pro, you’ve done it all, ser.',
		description:
			'Your browser history is stacked with big plays. Just one more step before we reveal your final form!'
	},
	{
		title: 'Your wallet’s been busier than Ansems DM’s about the sphere.',
		description: 'HODL tight, fren, the final reveal is one click away. Let’s see how’ve stacked up.'
	},
	{
		title: 'Your on-chain journey is looking thicker than a whale’s bag.',
		description: 'Giga moves anon. Fair play. Almost time to see your profile.'
	}
];

const getCopy = (bgVariant: 'Few' | 'Alot', randomNum: number): {title: string; description: string} => {
	if (bgVariant === 'Few') {
		return FEW_COPY[randomNum];
	}
	return ALOT_COPY[randomNum];
};

const randomNum = Math.floor(Math.random() * 3);

export function Intermediate({statsAmount, ...props}: TIntermediateProps): ReactElement {
	const bgVariant = statsAmount < 5 ? 'Few' : 'Alot';
	const copy = getCopy(bgVariant, randomNum);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/backgroundIntermediate${bgVariant}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/backgroundIntermediate${bgVariant}Mobile.jpg)`}>
			<CardContent className={'my-auto'}>
				<CardCopy className={'mb-4'}>
					<p className={'font-urbanist text-[32px] font-bold leading-8 text-white'}>{copy.title}</p>
				</CardCopy>
				<CardCopy>
					<p className={'font-urbanist text-xl font-medium text-white'}>{copy.description}</p>
				</CardCopy>
			</CardContent>
		</Card>
	);
}
