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
				'relative overflow-hidden flex md:aspect-[440/600]',
				'h-screen w-screen items-center',
				'md:h-auto md:w-[440px] md:items-baseline md:rounded-[32px] ',
				props.className
			)}>
			<div className={'relative z-50 flex size-full h-full flex-col items-center p-6 md:mb-0'}>
				{props.children}
			</div>
			<div
				className={'absolute inset-0 z-10 hidden bg-cover bg-no-repeat md:block'}
				style={{
					backgroundImage: props.backgroundImage,
					backgroundPosition: 'center'
				}}
			/>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat md:hidden'}
				style={{
					backgroundImage: props.mobileBackgroundImage,
					backgroundPosition: 'center'
				}}
			/>
		</div>
	);
}
