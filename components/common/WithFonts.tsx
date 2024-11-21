import React from 'react';
import {Handjet, Inter} from 'next/font/google';

import type {ReactElement, ReactNode} from 'react';

const handjet = Handjet({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--handjet-font'
});

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--inter-font'
});

export function WithFonts({children}: {children: ReactNode}): ReactElement {
	return (
		<div style={{fontFamily: `${handjet.style.fontFamily}, ${inter.style.fontFamily}`}}>
			<style
				jsx
				global>
				{`
					:root {
						--handjet-font: ${handjet.style.fontFamily};
						--inter-font: ${inter.style.fontFamily};
					}
				`}
			</style>

			{children}
		</div>
	);
}
