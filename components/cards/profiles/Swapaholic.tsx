import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TSwapaholicCardProps = Omit<TCardProps, 'children'> & {
	someData?: string;
	topRatio?: number;
};

export default function SwapaholicCard(props: TSwapaholicCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[236px] px-6'}>
					<p className={'font-urbanist text-center text-xl font-medium text-white'}>
						{
							'Swapped tokens more times than a boomer asks "Wen Lambo?" Smooth brain move or secret gigabrain plan?'
						}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/swapaholic.jpg)'}}
			/>
		</Card>
	);
}
