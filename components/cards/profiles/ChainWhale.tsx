import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TChainWhaleCardProps = Omit<TCardProps, 'children'> & {
	volume?: number;
	chainName?: string;
	topRatio?: number;
};

export default function ChainWhaleCard(props: TChainWhaleCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[288px] px-6'}>
					<p className={'font-space-grotesk mt-5 text-center text-xl font-medium text-white'}>
						{`Moved $${props.volume?.toLocaleString()} on ${props.chainName}, putting you in the top ${
							props.topRatio
						}% of traders. Chad.`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent'}
				style={{backgroundImage: 'url(/cards/profiles/chain-whale.jpg)'}}
			/>
		</Card>
	);
}
