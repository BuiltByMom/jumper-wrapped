import {type ReactElement} from 'react';
import Head from 'next/head';

import {SharedPage} from '@/components/SharedPage';

const baseUrl = 'https://wrapped.jumper.exchange';
export default function Home({address}: {address: string}): ReactElement {
	const ogImageUrl = address ? `${baseUrl}/api/og?address=${address}` : `${baseUrl}/og/og.jpg`;

	return (
		<>
			<Head>
				<meta
					property={'og:image'}
					content={ogImageUrl}
				/>
				<meta
					name={'twitter:image'}
					content={ogImageUrl}
				/>
			</Head>

			<SharedPage address={address} />
		</>
	);
}

export async function getServerSideProps(context: any): Promise<{props: {address: string}}> {
	const address = context.query.address || '';
	return {
		props: {address}
	};
}
