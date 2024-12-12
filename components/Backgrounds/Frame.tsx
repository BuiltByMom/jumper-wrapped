import type {ReactElement} from 'react';

/************************************************************************************************
 * Background Frame Component
 * Renders a decorative frame around the background
 * - Different styles for mobile and desktop
 * - Optional visibility control
 ************************************************************************************************/
export function BackgroundFrame({className = ''}: {className?: string}): ReactElement {
	return (
		<div
			className={`absolute inset-0 z-50 h-dvh w-screen border-x-[24px] border-b-[80px] border-violet-light xl:border-x-[64px] xl:border-b-[160px] ${className}`}
		/>
	);
}
