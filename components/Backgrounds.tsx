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

export function MainPageBackgound(): ReactElement {
	return (
		<div
			className={'absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden'}>
			<div className={'absolute h-screen w-screen bg-violet-dark'} />

			<div className={'xl:hidden'}>
				<SvgCircles
					centerX={'5280'}
					centerY={'5280'}
					// eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
					className={'absolute bottom-0 right-0 -translate-y-[80px] translate-x-[24px]'}
					showFrame={true}
				/>
			</div>
			<div className={'hidden xl:block'}>
				<LargeSvgCircles
					centerX={'5280'}
					centerY={'5280'}
					// eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
					className={'absolute bottom-0 right-0 -translate-y-[80px] translate-x-[24px]'}
					showFrame={true}
				/>
			</div>
		</div>
	);
}

export function GreetingsBackground(): ReactElement {
	return (
		<div className={'absolute left-0 top-0 h-screen w-screen overflow-hidden'}>
			<div className={'absolute h-screen w-screen bg-violet-dark'} />
			<div className={'xl:hidden'}>
				<SvgCircles
					centerX={'2640'}
					centerY={'2640'}
					className={'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'}
					showFrame={true}
				/>
			</div>
			<div className={'hidden xl:block'}>
				<LargeSvgCircles
					centerX={'2640'}
					centerY={'2640'}
					className={'absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'}
					showFrame={true}
				/>
			</div>
		</div>
	);
}
