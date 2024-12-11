import {Fragment, type ReactElement} from 'react';

import type {AppProps} from 'next/app';

import '@/styles/globals.css';

import {Meta} from '@/components/common/Meta';
import {Providers} from '@/components/providers/Providers';

export default function App({Component, pageProps}: AppProps): ReactElement {
	return (
		<Providers>
			<Fragment>
				<Component {...pageProps} />
				<Meta
					title={'Jumper Wrapped'}
					titleColor={'#FFFFFF'}
					themeColor={'#6120FD'}
					description={'Your Jumper year in review'}
					uri={'https://wrapped.jumper.exchange'}
				/>
			</Fragment>
		</Providers>
	);
}
