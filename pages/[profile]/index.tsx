import {type ReactElement} from 'react';
import Head from 'next/head';

import {SharedPage} from '@/components/SharedPage';

const domain = 'https://jumper-wrap.builtby.dad';
export default function Home({profile}: {profile: string}): ReactElement {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? domain : 'http://localhost:3000';
	const ogImageUrl = profile ? `${baseUrl}/api/og?profile=${profile}` : `${baseUrl}/og/og.jpg`;

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

			<SharedPage profile={profile} />
		</>
	);
}

export async function getServerSideProps(context: any): Promise<{props: {profile: string}}> {
	let profile = context.query.profile || '';
	if (profile && profile === 'diva') {
		profile = 'diva';
	}
	return {
		props: {profile}
	};
}
