import type {ReactElement} from 'react';

function SvgCircles(): ReactElement {
	return (
		<div className={'absolute z-10 h-screen w-screen'}>
			{/* Frame */}
			<div
				className={
					'absolute inset-0 z-50 h-screen w-screen border-x-[24px] border-b-[80px] border-violet-light'
				}
			/>
			<svg
				width={'5400'}
				height={'5300'}
				viewBox={'0 0 5280 5280'}
				fill={'none'}
				// eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
				className={'absolute bottom-0 right-0 -translate-y-[80px] translate-x-[24px]'}
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
								cx={'5280'}
								cy={'5280'}
								r={radius.toString()}
								stroke={'#6120FD'}
								strokeWidth={'24'}
								className={'animate-circle-pulse'}
								style={{
									animationDelay: `${finalDelay}ms`,
									animationDuration: '2s',
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
			<div
				className={
					'border-x-6 min-w-screen border-b-20 absolute left-0 top-0 z-40 min-h-screen w-screen border-violet-light'
				}
			/>
			<SvgCircles />
		</div>
	);
}

export function GreetingsBackground(): ReactElement {
	return (
		<div
			className={'absolute -left-1/2 -top-1/2 h-screen w-screen translate-x-1/2 translate-y-1/2 overflow-hidden'}>
			<div className={'absolute h-screen w-screen bg-violet-dark'} />
			<div
				className={
					'border-x-6 min-w-screen border-b-20 absolute left-0 top-0 z-40 min-h-screen w-screen border-violet-light'
				}
			/>
			<SvgCircles />
		</div>
	);
}
