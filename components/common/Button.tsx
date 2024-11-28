import {IconLoader} from '../icons/IconLoader';
import {cl} from '../utils/tools';

import type {ReactElement} from 'react';

type TButtonProps = {
	onClick?: () => void;
	title?: string;
	isBusy?: boolean;
	children?: ReactElement;
	className?: string;
};

export function Button({title, isBusy, children, className, onClick}: TButtonProps): ReactElement {
	return (
		<button
			onClick={onClick}
			className={cl(
				'flex h-14 w-60 items-center justify-center xl:rounded-[56px] rounded-[32px] bg-accent transition-all hover:bg-accent-hover xl:h-[64px] xl:w-[320px]',
				className
			)}>
			{children ? (
				children
			) : isBusy ? (
				<IconLoader className={'animate-spin text-black'} />
			) : (
				<p className={'text-2xl font-semibold uppercase text-black xl:text-3xl'}>{title}</p>
			)}
		</button>
	);
}
