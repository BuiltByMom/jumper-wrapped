import {type ReactElement, useCallback} from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {Button} from '@/components/common/Button';

export default function Home({profile}: {profile: string}): ReactElement {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://dynamicogver.vercel.app' : 'http://localhost:3000';
	const ogImageUrl = profile ? `${baseUrl}/api/og?profile=${profile}` : `${baseUrl}/og/og.jpg`;

	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=https://dynamicogver.vercel.app/${profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [profile]);

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

			<div>{`Hello ${profile}`}</div>
			<Image
				src={ogImageUrl}
				alt={'diva-wrap-bg'}
				unoptimized
				width={1200}
				height={630}
			/>
			<Button
				onClick={clickToTweet}
				title={'Button'}
			/>
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
