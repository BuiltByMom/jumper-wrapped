import {IconLoader} from '../icons/IconLoader';
import {cl} from '../utils/tools';

import type {ButtonHTMLAttributes, ReactElement} from 'react';

type TButtonProps = {
	onClick?: () => void;
	title?: string;
	isBusy?: boolean;
	children?: ReactElement;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export function Button({title, isBusy, children, className, ...props}: TButtonProps): ReactElement {
	return (
		<button
			{...props}
			className={cl(
				'flex h-14 w-60 items-center justify-center xl:rounded-[56px] rounded-[32px] bg-accent transition-all hover:bg-accent-hover xl:h-[64px] xl:w-[320px]',
				className
			)}>
			{children ? (
				children
			) : isBusy ? (
				<IconLoader className={'animate-spin text-black'} />
			) : (
				<p className={'text-xl font-semibold uppercase text-black'}>{title}</p>
			)}
		</button>
	);
}
