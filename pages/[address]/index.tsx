import {type ReactElement} from 'react';
import Head from 'next/head';

import {SharedPage} from '@/components/SharedPage';

const baseUrl = 'https://wrapped.jumper.exchange';
export default function Home({address}: {address: string}): ReactElement {
	return (
		<>
			<Head>
				<meta
					property={'og:image'}
					content={`${baseUrl}/api/og?address=${address}`}
				/>
				<meta
					name={'twitter:image'}
					content={`${baseUrl}/api/og?address=${address}`}
				/>
				<meta
					property={'twitter:card'}
					content={'summary_large_image'}
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
