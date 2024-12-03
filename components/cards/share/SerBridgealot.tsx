import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TSerBridgealotCardProps = Omit<TCardProps, 'children'> & {
	volumeInUSD: number;
	topRatio: number;
	showShareButton?: boolean;
};

export default function SerBridgealotCard(props: TSerBridgealotCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[195px] px-6'}>
					<p className={'font-space-grotesk text-center text-xl font-medium text-white'}>
						{`Bridged a whopping $${props.volumeInUSD}, leaving ${props.topRatio.toFixed(
							2
						)}% of normies in the dust.`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/share/ser-bridgealot.jpg)'}}
			/>
		</Card>
	);
}
