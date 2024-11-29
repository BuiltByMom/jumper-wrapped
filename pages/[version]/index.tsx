import Head from 'next/head';

import type {ReactElement} from 'react';

export default function Home({version}: {version: string}): ReactElement {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://jumper-wrapped.vercel.app' : 'http://localhost:3000';
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

			<div>{`Hello ${version}`}</div>
		</>
	);
}

export async function getServerSideProps(context: any): Promise<{props: {version: string}}> {
	let version = context.query.version || '';
	if (version && version === 'divo') {
		version = 'diva';
	}
	return {
		props: {version}
	};
}
