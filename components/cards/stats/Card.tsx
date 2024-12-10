import {type ReactElement, type ReactNode, useEffect, useRef} from 'react';
import {useHover} from 'usehooks-ts';
import {motion} from 'framer-motion';

import {cl} from '@/components/utils/tools';

export function Card(props: {
	children: ReactNode;
	className?: string;
	backgroundImage: string;
	mobileBackgroundImage: string;
}): ReactElement {
	const ref = useRef<HTMLDivElement>(null);
	const isHovering = useHover(ref);

	useEffect(() => {
		if (isHovering) {
			document.getElementById('pause-on-desktop')?.click();
			document.getElementById('pause-on-mobile')?.click();
		} else {
			document.getElementById('continue-on-desktop')?.click();
			document.getElementById('continue-on-mobile')?.click();
		}
	}, [isHovering]);

	return (
		<motion.div
			ref={ref}
			animate={{
				scale: isHovering ? 1.05 : 1
			}}
			transition={{
				type: 'spring',
				stiffness: 120,
				damping: 10,
				mass: 0.7,
				opacity: {duration: 0.4, delay: 0.4}
			}}
			className={cl(
				'relative overflow-hidden flex md:aspect-[440/600]',
				'h-screen w-[calc(100vw+7px)] items-center pt-[120px] md:pt-0',
				'md:h-auto md:w-[440px] md:items-baseline md:rounded-[32px]',
				props.className
			)}>
			<div
				className={
					'relative z-50 flex size-full h-full flex-col items-center px-6 pb-6 pt-8 md:mb-0 md:scale-100'
				}>
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
		</motion.div>
	);
}
