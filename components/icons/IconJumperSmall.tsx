import type {ReactElement} from 'react';

export function IconJumperSmall(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			width={'32'}
			height={'32'}
			viewBox={'0 0 32 32'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path
				d={
					'M17.1419 16.0004L5.82812 27.3141L8.65653 30.1426C10.0707 31.5568 12.8991 31.5568 14.3133 30.1426L25.627 18.8289C27.0412 17.4147 27.0414 14.5861 25.627 13.1721L19.9703 7.51514L14.3135 13.1721L17.1419 16.0004Z'
				}
				fill={'currentcolor'}
			/>
			<path
				d={
					'M5.8252 4.68303L8.65363 1.85461C10.0678 0.440391 12.8962 0.440391 14.3104 1.85461L17.1389 4.68303L11.482 10.3399L5.8252 4.68303Z'
				}
				fill={'currentcolor'}
			/>
		</svg>
	);
}
