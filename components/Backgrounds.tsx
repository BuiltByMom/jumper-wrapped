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

			<div className={'xl:hidden'}>
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

export function DiamondBackground(): ReactElement {
	return (
		<div className={'absolute left-0 top-0 z-40 size-full'}>
			<svg
				width={'440'}
				height={'600'}
				viewBox={'0 0 375 812'}
				fill={'none'}
				xmlns={'http://www.w3.org/2000/svg'}>
				<g opacity={'0.4'}>
					<rect
						opacity={'1'}
						x={'-15.5147'}
						y={'405.955'}
						width={'288'}
						height={'288'}
						transform={'rotate(-45 -15.5147 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'26.4853'}
						y={'405.955'}
						width={'228'}
						height={'228'}
						transform={'rotate(-45 26.4853 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'69.4853'}
						y={'405.955'}
						width={'168'}
						height={'168'}
						transform={'rotate(-45 69.4853 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'111.485'}
						y={'405.955'}
						width={'108'}
						height={'108'}
						transform={'rotate(-45 111.485 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'154.485'}
						y={'405.955'}
						width={'48'}
						height={'48'}
						transform={'rotate(-45 154.485 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-58.5147'}
						y={'405.955'}
						width={'348'}
						height={'348'}
						transform={'rotate(-45 -58.5147 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-100.515'}
						y={'405.955'}
						width={'408'}
						height={'408'}
						transform={'rotate(-45 -100.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-142.515'}
						y={'405.955'}
						width={'468'}
						height={'468'}
						transform={'rotate(-45 -142.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-185.515'}
						y={'405.955'}
						width={'528'}
						height={'528'}
						transform={'rotate(-45 -185.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-227.515'}
						y={'405.955'}
						width={'588'}
						height={'588'}
						transform={'rotate(-45 -227.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-270.515'}
						y={'405.955'}
						width={'648'}
						height={'648'}
						transform={'rotate(-45 -270.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-312.515'}
						y={'405.955'}
						width={'708'}
						height={'708'}
						transform={'rotate(-45 -312.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-355.515'}
						y={'405.955'}
						width={'768'}
						height={'768'}
						transform={'rotate(-45 -355.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-397.515'}
						y={'405.955'}
						width={'828'}
						height={'828'}
						transform={'rotate(-45 -397.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-439.515'}
						y={'405.955'}
						width={'888'}
						height={'888'}
						transform={'rotate(-45 -439.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-482.515'}
						y={'405.955'}
						width={'948'}
						height={'948'}
						transform={'rotate(-45 -482.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-524.515'}
						y={'405.955'}
						width={'1008'}
						height={'1008'}
						transform={'rotate(-45 -524.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-567.515'}
						y={'405.955'}
						width={'1068'}
						height={'1068'}
						transform={'rotate(-45 -567.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-609.515'}
						y={'405.955'}
						width={'1128'}
						height={'1128'}
						transform={'rotate(-45 -609.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-652.515'}
						y={'405.955'}
						width={'1188'}
						height={'1188'}
						transform={'rotate(-45 -652.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
					<rect
						opacity={'1'}
						x={'-694.515'}
						y={'405.955'}
						width={'1248'}
						height={'1248'}
						transform={'rotate(-45 -694.515 405.955)'}
						stroke={'#CEF2BE'}
						strokeWidth={'12'}
					/>
				</g>
			</svg>
		</div>
	);
}
