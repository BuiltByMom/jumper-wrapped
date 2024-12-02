import type {ReactElement} from 'react';

export function IconETH(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			width={'32'}
			height={'32'}
			viewBox={'0 0 32 32'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<g clipPath={'url(#clip0_343_578)'}>
				<path
					d={
						'M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
					}
					fill={'#627EEA'}
				/>
				<path
					fillRule={'evenodd'}
					clipRule={'evenodd'}
					d={'M8.5 16.2225L15.9996 4V12.8718L8.5 16.2225ZM15.9996 21.9707V28L8.5 17.6188L15.9996 21.9707Z'}
					fill={'white'}
				/>
				<path
					d={'M16 20.5766L23.4986 16.2227L16 12.874V20.5766Z'}
					fill={'white'}
					fillOpacity={'0.2'}
				/>
				<path
					fillRule={'evenodd'}
					clipRule={'evenodd'}
					d={
						'M15.9996 4V12.8718L23.4982 16.2225L15.9996 4ZM15.9996 21.9717V28L23.5032 17.6188L15.9996 21.9717ZM15.9996 20.5765L8.5 16.2226L15.9996 12.8739V20.5765Z'
					}
					fill={'white'}
					fillOpacity={'0.602'}
				/>
			</g>
			<defs>
				<clipPath id={'clip0_343_578'}>
					<rect
						width={'32'}
						height={'32'}
						fill={'white'}
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
