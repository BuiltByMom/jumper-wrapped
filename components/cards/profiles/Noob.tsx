import Card from './Card';

import type {ReactElement} from 'react';
import type {TCardProps} from './Card';

type TNoobCardProps = Omit<TCardProps, 'children'> & {
	volume?: number;
	chainName?: string;
	topRatio?: number;
};

export default function NoobCard(props: TNoobCardProps): ReactElement {
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[280px] px-6'}>
					<p className={'font-urbanist mt-5 text-center text-xl font-medium text-white'}>
						{
							"Looks like you've never used Jumper anon... which makes us wonder… Exactly where you have been doing all your bridging? Hmm? Anyways, we’re not the grudge holding type. Come back next year. We’ll be waiting.xx"
						}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/noob.jpg)'}}
			/>
		</Card>
	);
}
