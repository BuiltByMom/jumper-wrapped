import {Fragment, type ReactElement} from 'react';
import Head from 'next/head';

import {PageBackground} from '@/components/Backgrounds';
import {Button404} from '@/components/Button404';
import {Header} from '@/components/common/Header';

export default function Page404(): ReactElement {
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
			<div className={'flex h-screen w-full items-center justify-center bg-violet-light'}>
				<PageBackground position={'center'} />
				<Header
					set_isWalletSelectorOpen={() => {}}
					cardsAmount={0}
				/>
				<Button404 />
			</div>
		</Fragment>
	);
}
