import React from 'react';

import type {ReactElement} from 'react';

export function IconArrow(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			width={'32'}
			height={'32'}
			viewBox={'0 0 32 32'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 18 22)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 14 18)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 10 14)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 26 14)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 22 14)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 18 14)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 14 14)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 14 10)'}
				fill={'currentcolor'}
			/>
			<rect
				width={'4'}
				height={'4'}
				transform={'matrix(-1 0 0 1 18 6)'}
				fill={'currentcolor'}
			/>
		</svg>
	);
}
