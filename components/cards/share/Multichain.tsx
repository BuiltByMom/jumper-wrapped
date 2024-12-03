import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TMultiChainCardProps = Omit<TCardProps, 'children'> & {
	numberOfChains: number;
	topRatio: number;
};

export default function MultiChainCard(props: TMultiChainCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[365px] px-6'}>
					<p className={'font-space-grotesk text-center text-xl font-medium text-white'}>
						{`You aped into ${props.numberOfChains} chains, flexing on ${props.topRatio.toFixed(
							2
						)}% of plebs! LFG!`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/share/multichain.jpg)'}}
			/>
		</Card>
	);
}
