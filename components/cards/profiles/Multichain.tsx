import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TMultiChainCardProps = Omit<TCardProps, 'children'> & {
	numberOfChains: number;
};

export default function MultiChainCard(props: TMultiChainCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[365px] px-6'}>
					<p className={'font-urbanist text-center text-xl font-medium text-white'}>
						{`You aped into ${props.numberOfChains} chains! LFG!`}
					</p>
				</div>
			</div>

			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/multichain.jpg)'}}
			/>
		</Card>
	);
}
