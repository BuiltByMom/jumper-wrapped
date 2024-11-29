import Head from 'next/head';

import type {ReactElement} from 'react';

import {Button} from '@/components/common/Button';
import {ButtonArrow} from '@/components/common/ButtonArrow';
import {IconArrow} from '@/components/icons/IconArrow';

export default function Home(): ReactElement {
	// Get the base URL for OG image
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: 'http://localhost:3000';

	return (
		<>
			<Head>
				<title>{'Jumper Wrapped'}</title>
				<meta
					name={'description'}
					content={'Your Jumper year in review'}
				/>

				{/* Open Graph / Social Media Meta Tags */}
				<meta
					property={'og:title'}
					content={'Jumper Wrapped'}
				/>
				<meta
					property={'og:description'}
					content={'Your Jumper year in review'}
				/>
				<meta
					property={'og:image'}
					content={`${baseUrl}/api/og`}
				/>
				<meta
					property={'og:image:width'}
					content={'1200'}
				/>
				<meta
					property={'og:image:height'}
					content={'630'}
				/>

				{/* Twitter Card Meta Tags */}
				<meta
					name={'twitter:card'}
					content={'summary_large_image'}
				/>
				<meta
					name={'twitter:title'}
					content={'Jumper Wrapped'}
				/>
				<meta
					name={'twitter:description'}
					content={'Your Jumper year in review'}
				/>
				<meta
					name={'twitter:image'}
					content={`${baseUrl}/api/og`}
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
