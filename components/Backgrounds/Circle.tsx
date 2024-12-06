import type {ReactElement} from 'react';

/************************************************************************************************
 * Circle Animation Configuration
 * Defines the animation properties for each circle in the background
 * - Radius increases with each circle
 * - Animation delay is staggered for wave effect
 * - Cycles are grouped for performance
 ************************************************************************************************/
type TCircleProps = {
	index: number;
	centerX: string;
	centerY: string;
	isLarge?: boolean;
};

export function AnimatedCircle({index, centerX, centerY, isLarge = false}: TCircleProps): ReactElement {
	const radius = isLarge ? 96 + index * 120 : 48 + index * 60;
	const delay = index * 200;
	const cycleDelay = Math.floor(index / 5) * 1000;
	const finalDelay = (delay % 1000) + cycleDelay;

	return (
		<circle
			key={index}
			cx={centerX}
			cy={centerY}
			r={radius.toString()}
			stroke={'#6120FD'}
			strokeWidth={isLarge ? '48' : '24'}
			className={isLarge ? 'animate-large-circle-pulse' : 'animate-circle-pulse'}
			style={{
				animationDelay: `${finalDelay}ms`,
				animationDuration: '1.5s',
				transformOrigin: 'center'
			}}
		/>
	);
}
