import {type ReactElement, useCallback} from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {Button} from '@/components/common/Button';

export default function Home({version}: {version: string}): ReactElement {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://dynamicogver.vercel.app' : 'http://localhost:3000';
	const ogImageUrl = version ? `${baseUrl}/api/og?version=${version}` : `${baseUrl}/og/og.jpg`;
	const randomKey = Math.random().toString(36).substring(2, 15);

	const clickToTweet = useCallback(async () => {
		try {
			const formData = new FormData();
			formData.append('url', `https://dynamicogver.vercel.app/${version}?owner=${randomKey}`);
			formData.append('platform', 'Swift-12');
			const bla = await fetch('https://cards-dev.twitter.com/validator/validate', {
				method: 'POST',
				body: formData
			});
			// const bla = await fetch('https://caps.x.com/v2/cards/preview.json', {
			// 	method: 'POST',
			// 	body: JSON.stringify({
			// 		status: `https://dynamicogver.vercel.app/${version}?owner=${randomKey}`,
			// 		cards_platform: 'Web-12',
			// 		include_cards: true
			// 	})
			// });
			console.log(bla);
		} catch (error) {
			console.error(error);
		}

		window.open(
			`https://twitter.com/intent/tweet?url=https://dynamicogver.vercel.app/${version}?owner=${randomKey}&text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [version]);

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
			<Image
				src={'https://dynamicogver.vercel.app/api/og?version=diva'}
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

export async function getServerSideProps(context: any): Promise<{props: {version: string}}> {
	let version = context.query.version || '';
	if (version && version === 'divo') {
		version = 'diva';
	}
	return {
		props: {version}
	};
}
