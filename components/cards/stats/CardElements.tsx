import {motion} from 'framer-motion';

import {animations} from './animations';

import type {CSSProperties, ReactElement, ReactNode} from 'react';

import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Shared Card Elements
 * Common components used across different stat cards for consistent styling and animations
 ************************************************************************************************/
export function CardTitle({children, className = ''}: {children: ReactNode; className?: string}): ReactElement {
	return (
		<motion.div
			variants={animations.title}
			initial={'initial'}
			animate={'animate'}
			className={cl('flex flex-col gap-2 text-center', className)}>
			{children}
		</motion.div>
	);
}

export function CardContent(props: {children: ReactNode; className?: string; style?: CSSProperties}): ReactElement {
	const {children, className = '', style} = props;

	return (
		<motion.div
			variants={animations.content}
			initial={'initial'}
			animate={'animate'}
			className={cl('origin-center', className)}
			style={style}>
			{children}
		</motion.div>
	);
}

export function CardCopy({children, className = ''}: {children: ReactNode; className?: string}): ReactElement {
	return (
		<motion.div
			variants={animations.copy}
			initial={'initial'}
			animate={'animate'}
			className={cl('mt-auto flex items-center justify-center text-center', className)}>
			{children}
		</motion.div>
	);
}
