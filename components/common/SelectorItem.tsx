import {IconArrow} from '../icons/IconArrow';

import type {ReactElement} from 'react';

type TSelectorItemProps = {
	title?: string;
	onClick?: () => void;
};

export function SelectorItem({title, onClick}: TSelectorItemProps): ReactElement {
	return (
		<button
			className={'group flex w-[480px] justify-between bg-violet-dark px-[30px] py-6 hover:bg-accent'}
			onClick={onClick}>
			<p className={'font-space-grotesk text-2xl font-bold uppercase text-white group-hover:text-black'}>
				{title}
			</p>
			<IconArrow className={'hidden rotate-180 group-hover:block'} />
		</button>
	);
}
