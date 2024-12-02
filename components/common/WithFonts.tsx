import React from 'react';
import {Inter, Space_Grotesk} from 'next/font/google';

import type {ReactElement, ReactNode} from 'react';

const spaceGrotesk = Space_Grotesk({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--space-grotesk-font'
});

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--inter-font'
});

export function WithFonts({children}: {children: ReactNode}): ReactElement {
	return (
		<div
			style={{
				fontFamily: `${spaceGrotesk.style.fontFamily}, ${inter.style.fontFamily}`
			}}>
			<style
				jsx
				global>
				{`
					:root {
						--space-grotesk-font: ${spaceGrotesk.style.fontFamily};
						--inter-font: ${inter.style.fontFamily};
					}
				`}
			</style>

			{children}
		</div>
	);
}
