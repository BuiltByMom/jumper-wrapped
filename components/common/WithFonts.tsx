import React from 'react';
import {Inter, Urbanist} from 'next/font/google';

import type {ReactElement, ReactNode} from 'react';

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--inter-font'
});

const urbanist = Urbanist({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--urbanist-font'
});

export function WithFonts({children}: {children: ReactNode}): ReactElement {
	return (
		<div
			style={{
				fontFamily: `${urbanist.style.fontFamily}, ${inter.style.fontFamily}`
			}}>
			<style
				jsx
				global>
				{`
					:root {
						--urbanist-font: ${urbanist.style.fontFamily};
						--inter-font: ${inter.style.fontFamily};
					}
				`}
			</style>

			{children}
		</div>
	);
}
