import Head from 'next/head';
import {useRouter} from 'next/router';

import type {ReactElement} from 'react';

import {HomePage} from '@/components/Home';

export default function Index(): ReactElement {
	const router = useRouter();
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://jumper-wrap.builtby.dad' : 'http://localhost:3000';
	const version = router.query.version || '';
	const ogImageUrl = version ? `${baseUrl}/api/og?version=${version}` : `${baseUrl}/og/og.jpg`;

	return (
		<>
			<Head>
				<meta
					property={'og:image'}
					content={ogImageUrl}
				/>
				<meta
					property={'og:image:width'}
					content={'1200'}
				/>
				<meta
					property={'og:image:height'}
					content={'630'}
				/>
				<meta
					name={'twitter:image'}
					content={ogImageUrl}
				/>
			</Head>
			<HomePage />
		</>
	);
}

export async function getServerSideProps(context: any): Promise<{props: {version: string}}> {
	const version = context.query.version || '';
	return {
		props: {
			version
		}
	};
}
