import {IconArrow} from '../icons/IconArrow';
import {cl} from '../utils/tools';

import type {ReactElement} from 'react';

type TSelectorItemProps = {
	title?: string;
	onClick?: () => void;
	className?: string;
	icon?: ReactElement;
};

export function SelectorItem({title, onClick, icon, className}: TSelectorItemProps): ReactElement {
	return (
		<button
			className={cl(
				'group flex w-[343px] items-center justify-between bg-violet-dark px-[30px] py-6 hover:bg-accent md:w-[480px]',
				className
			)}
			onClick={onClick}>
			<div className={'flex items-center'}>
				{icon && <div className={'mr-4'}>{icon}</div>}
				<p className={'font-urbanist text-2xl font-bold uppercase text-white group-hover:text-black'}>
					{title}
				</p>
			</div>
			<IconArrow className={'hidden rotate-180 group-hover:block'} />
		</button>
	);
}
