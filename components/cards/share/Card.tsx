import type {ReactElement, ReactNode} from 'react';

import {cl} from '@/components/utils/tools';

export type TCardProps = {
	children: ReactNode;
	width: number;
	className?: string;
};
export default function Card(props: TCardProps): ReactElement {
	const {width} = props;

	return (
		<div className={'w-auto'}>
			<div
				style={{transform: `scale(${width / 440})`, width: 440}}
				className={cl(
					'relative flex aspect-[440/600] rounded-[32px] border-accent border-4 overflow-hidden',
					'origin-top',
					props.className
				)}>
				{props.children}
			</div>
		</div>
	);
}
