import type {ReactElement, ReactNode} from 'react';

import {cl} from '@/components/utils/tools';

export function Card(props: {
	children: ReactNode;
	className?: string;
	backgroundImage: string;
	mobileBackgroundImage: string;
}): ReactElement {
	return (
		<div
			className={cl(
				'relative h-screen md:h-auto flex md:items-baseline items-center aspect-[440/600] md:rounded-[32px] overflow-hidden w-[440px]',
				props.className
			)}>
			<div
				className={
					'relative z-50 flex size-full h-[50vh] scale-90 flex-col items-center p-6 max-sm:mt-[-25vh] md:mb-0 md:h-auto md:scale-100'
				}>
				{props.children}
			</div>
			<div
				className={'absolute inset-0 z-10 hidden bg-cover bg-no-repeat md:block'}
				style={{
					backgroundImage: props.backgroundImage
				}}
			/>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat md:hidden'}
				style={{
					backgroundImage: props.mobileBackgroundImage
				}}
			/>
		</div>
	);
}
