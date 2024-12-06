import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TPaperHandedCardProps = Omit<TCardProps, 'children'> & {
	topRatio?: number;
	someData?: string;
};

export default function PaperHandedCard(props: TPaperHandedCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[244px] px-6'}>
					<p className={'font-space-grotesk text-center text-xl font-medium'}>
						{'What can we say. You folded some real plays. The only way is up. Hopefully WAGMI?'}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/profiles/paper-handed-pleb.jpg)'}}
			/>
		</Card>
	);
}
