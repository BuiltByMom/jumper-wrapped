import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TDivaCardCardProps = Omit<TCardProps, 'children'> & {
	tokens: string[];
};

export default function DivaCardCard(props: TDivaCardCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[276px] px-6'}>
					<p className={'font-urbanist text-center text-xl font-medium text-white'}>
						{'You HODLed so much tokens. Diamond hands for the diamond diva!'}
					</p>
				</div>
			</div>

			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/diva.jpg)'}}
			/>
		</Card>
	);
}
