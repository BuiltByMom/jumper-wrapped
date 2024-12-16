import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TChainWhaleCardProps = Omit<TCardProps, 'children'> & {
	volume?: number;
	chainName?: string;
	topRatio?: number;
};

export default function ChainWhaleCard(props: TChainWhaleCardProps): ReactElement {
	const rank = (props.topRatio ?? 0) <= 0.001 ? '0.1' : ((props.topRatio ?? 0) * 100).toFixed(0);

	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[304px] px-6'}>
					<p className={'font-urbanist mt-5 text-center text-xl font-medium text-white'}>
						{`Moved $${props.volume?.toLocaleString()}${props.chainName ? ' on ' : ''}${
							props.chainName
						}, putting you in the top ${rank}% of traders. Chad.`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/chain-whale.jpg)'}}
			/>
		</Card>
	);
}
