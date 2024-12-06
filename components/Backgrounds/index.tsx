import {CircleGroup} from './CircleGroup';

import type {ReactElement} from 'react';
import type {TPageBackgroundProps} from './types';

import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Page Background Component
 * Renders an animated background with pulsing circles
 * Features:
 * - Responsive design with different circle sizes for different screen sizes
 * - Position control for center or bottom-right alignment
 * - Optional frame
 * - Smooth transitions between positions
 ************************************************************************************************/
export function PageBackground({position = 'center', showFrame = true, className}: TPageBackgroundProps): ReactElement {
	return (
		<div
			className={cl(
				'absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden',
				className
			)}>
			<div className={'absolute h-screen w-screen bg-violet-dark'} />

			<div className={'hidden md:block xl:hidden'}>
				<CircleGroup
					centerX={'2640'}
					centerY={'2640'}
					className={cl(
						'absolute transition-all duration-1000',
						position === 'center' ? 'background-position-bottom-center' : 'background-position-bottom-right'
					)}
					showFrame={showFrame}
				/>
			</div>
			<div className={'hidden xl:block'}>
				<CircleGroup
					centerX={'2640'}
					centerY={'2640'}
					className={cl(
						'absolute transition-all duration-1000 w-[200vw]',
						position === 'center'
							? 'background-position-bottom-center'
							: 'background-position-bottom-right-big'
					)}
					showFrame={showFrame}
					isLarge={true}
				/>
			</div>
		</div>
	);
}
