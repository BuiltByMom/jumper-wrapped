import {AnimatedCircle} from './Circle';
import {BackgroundFrame} from './Frame';

import type {ReactElement} from 'react';
import type {TSvgCirclesProps} from './types';

/************************************************************************************************
 * Circle Group Component
 * Renders a group of animated circles with optional frame
 * - Large variant for desktop
 * - Regular variant for mobile/tablet
 * - Configurable center point and frame visibility
 ************************************************************************************************/
export function CircleGroup({
	centerX,
	centerY,
	className,
	showFrame = false,
	isLarge = false
}: TSvgCirclesProps & {
	isLarge?: boolean;
}): ReactElement {
	return (
		<div className={'absolute z-10 h-dvh w-screen'}>
			{showFrame && <BackgroundFrame className={'hidden md:block'} />}
			<svg
				width={'5400'}
				height={'5300'}
				viewBox={'0 0 5280 5280'}
				fill={'none'}
				className={className}
				xmlns={'http://www.w3.org/2000/svg'}>
				<g
					clipPath={'url(#clip0_126_6633)'}
					className={'bg-violet-light'}>
					<rect
						width={'1872'}
						height={'920'}
						fill={'#5000FF'}
					/>
					{Array.from({length: 1000}).map((_, index) => (
						<AnimatedCircle
							key={index}
							index={index}
							centerX={centerX}
							centerY={centerY}
							isLarge={isLarge}
						/>
					))}
				</g>
			</svg>
		</div>
	);
}
