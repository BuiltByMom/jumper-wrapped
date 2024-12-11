import {Fragment, type ReactElement} from 'react';
import Head from 'next/head';

import {HomePage} from '@/components/Home';

export default function Index(): ReactElement {
	return (
		<Fragment>
			<Head>
				<meta
					property={'og:image'}
					content={'https://wrapped.jumper.exchange/og/og.jpg'}
				/>
				<meta
					name={'twitter:image'}
					content={'https://wrapped.jumper.exchange/og/og.jpg'}
				/>
				<meta
					property={'twitter:card'}
					content={'summary_large_image'}
				/>
			</Head>
			<HomePage />
		</Fragment>
	);
}
