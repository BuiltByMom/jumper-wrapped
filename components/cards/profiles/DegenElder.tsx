import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TDegenElderCardProps = Omit<TCardProps, 'children'> & {
	someData?: string;
	topRatio?: number;
};

export default function DegenElderCard(props: TDegenElderCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[352px] px-6'}>
					<p className={'font-urbanist text-center text-xl font-medium text-white'}>
						{
							'A crypto OG who’s weathered every market storm. This seasoned degen turns FUD into hopium and laughs in the face of rug pulls. HODL strong!'
						}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/degen-elder.jpg)'}}
			/>
		</Card>
	);
}
