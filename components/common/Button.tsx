import {IconLoader} from '../icons/IconLoader';
import {cl} from '../utils/tools';

import type {ReactElement} from 'react';

type TButtonProps = {
	title?: string;
	isBusy?: boolean;
	children?: ReactElement;
	className?: string;
};
export function Button({title, isBusy, children, className}: TButtonProps): ReactElement {
	return (
		<button
			className={cl(
				'flex h-14 w-60 items-center justify-center rounded-[32px] bg-accent transition-all hover:bg-accent-hover',
				className
			)}>
			{children ? (
				children
			) : isBusy ? (
				<IconLoader className={'animate-spin text-black'} />
			) : (
				<p className={'text-[32px] font-semibold uppercase leading-[32px] text-black'}>{title}</p>
			)}
		</button>
	);
}
