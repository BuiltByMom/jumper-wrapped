import type {AppProps} from 'next/app';
import type {ReactElement} from 'react';

import '@/styles/globals.css';

import {Providers} from '@/components/common/Providers';

export default function App({Component, pageProps}: AppProps): ReactElement {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
}
