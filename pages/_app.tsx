import {type ReactElement, useEffect} from 'react';
import {useWindowSize} from 'usehooks-ts';

import type {AppProps} from 'next/app';

import '@/styles/globals.css';

import {Meta} from '@/components/common/Meta';
import {Providers} from '@/components/providers/Providers';

export default function App({Component, pageProps}: AppProps): ReactElement {
	const size = useWindowSize();
	const minSupportedWidth = 375;
	const minSupportedHeight = 667;

	useEffect(() => {
		if (size.width < minSupportedWidth || size.height < minSupportedHeight) {
			if (typeof window !== 'undefined') {
				console.warn('Please use a device with a minimum width of 375px and height of 667px');
				const scale = Math.min(size.width / minSupportedWidth, size.height / minSupportedHeight);
				const primarySectionGreetings = document.getElementById('primary-section-greetings');
				if (primarySectionGreetings) {
					primarySectionGreetings.style.scale = `${scale}`;
				}

				const primarySectionCarousel = document.getElementById('primary-section-carousel');
				if (primarySectionCarousel) {
					primarySectionCarousel.style.scale = `${scale}`;
				}

				const primarySectionNoData = document.getElementById('primary-section-nodata');
				if (primarySectionNoData) {
					primarySectionNoData.style.scale = `${scale}`;
				}
			}
		}
	}, [size, typeof window]);

	return (
		<Providers>
			<div>
				<Component {...pageProps} />
				<Meta
					title={'Jumper Wrapped'}
					titleColor={'#FFFFFF'}
					themeColor={'#6120FD'}
					description={'Your Jumper year in review'}
					uri={'https://wrapped.jumper.exchange'}
				/>
			</div>
		</Providers>
	);
}
