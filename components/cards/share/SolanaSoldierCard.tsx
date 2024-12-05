import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TSolanaSoldierCardProps = Omit<TCardProps, 'children'> & {
	someData?: string;
	topRatio?: number;
};

export default function SolanaSoldierCard(props: TSolanaSoldierCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[288px] px-6'}>
					<p className={'font-space-grotesk text-center text-xl font-medium text-white'}>
						{
							'An unwavering ape in the Solana trenches. Fast transactions, low fees — this soldier rides the SOL wave while normies ask where their profits went.'
						}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/share/solana-soldier.jpg)'}}
			/>
		</Card>
	);
}
