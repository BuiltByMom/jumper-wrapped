import Head from 'next/head';
import {useRouter} from 'next/router';

import type {ReactElement} from 'react';

import {Button} from '@/components/common/Button';
import {ButtonArrow} from '@/components/common/ButtonArrow';
import {IconArrow} from '@/components/icons/IconArrow';

export default function Home(): ReactElement {
	const router = useRouter();
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://dynamicogver.vercel.app' : 'http://localhost:3000';
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

			<div>
				<IconArrow className={'rotate-180 text-black'} />
				<Button
					isBusy={true}
					title={'Button'}
				/>
				<Button title={'Button'} />
				<ButtonArrow direction={'left'} />
				<ButtonArrow direction={'right'} />
			</div>
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
