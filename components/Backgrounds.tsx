import {cl} from './utils/tools';

import type {ReactElement} from 'react';

type TSvgCirclesProps = {
	centerX: string;
	centerY: string;
	className: string;
	showFrame?: boolean;
};

function LargeSvgCircles({centerX, centerY, className, showFrame = false}: TSvgCirclesProps): ReactElement {
	return (
		<div className={'absolute z-10 h-screen w-screen'}>
			{showFrame && (
				<div
					className={
						'absolute inset-0 z-50 h-screen w-screen border-x-[24px] border-b-[80px] border-violet-light xl:border-x-[64px] xl:border-b-[160px]'
					}
				/>
			)}
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
					{Array.from({length: 1000}).map((_, index) => {
						const radius = 96 + index * 120;
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
								strokeWidth={'48'}
								className={'animate-large-circle-pulse'}
								style={{
									animationDelay: `${finalDelay}ms`,
									animationDuration: '1.5s',
									transformOrigin: 'center'
								}}
							/>
						);
					})}
				</g>
			</svg>
		</div>
	);
}

function SvgCircles({centerX, centerY, className, showFrame = false}: TSvgCirclesProps): ReactElement {
	return (
		<div className={'absolute z-10 h-screen w-screen'}>
			{showFrame && (
				<div
					className={
						'absolute inset-0 z-50 hidden h-screen w-screen border-x-[24px] border-b-[80px] border-violet-light md:block xl:border-x-[64px] xl:border-b-[160px]'
					}
				/>
			)}
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
					{Array.from({length: 1000}).map((_, index) => {
						const radius = 48 + index * 60;
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
								strokeWidth={'24'}
								className={'animate-circle-pulse'}
								style={{
									animationDelay: `${finalDelay}ms`,
									animationDuration: '1.5s',
									transformOrigin: 'center'
								}}
							/>
						);
					})}
				</g>
			</svg>
		</div>
	);
}

export function PageBackgound({
	position = 'center',
	showFrame = true,
	className
}: {
	position?: 'center' | 'bottom-right';
	showFrame?: boolean;
	className?: string;
}): ReactElement {
	return (
		<div
			className={cl(
				'absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden',
				className
			)}>
			<div className={'absolute h-screen w-screen bg-violet-dark'} />

			<div className={'hidden md:block xl:hidden'}>
				<SvgCircles
					centerX={'2640'}
					centerY={'2640'}
					className={cl(
						'absolute transition-all duration-1000 hello',
						position === 'center' ? 'background-position-bottom-center' : 'background-position-bottom-right'
					)}
					showFrame={showFrame}
				/>
			</div>
			<div className={'hidden xl:block'}>
				<LargeSvgCircles
					centerX={'2640'}
					centerY={'2640'}
					className={cl(
						'absolute transition-all duration-1000 w-[200vw]',
						position === 'center'
							? 'background-position-bottom-center'
							: 'background-position-bottom-right-big'
					)}
					showFrame={true}
				/>
			</div>
		</div>
	);
}
