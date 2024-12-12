import {type ReactElement, useEffect} from 'react';
import Head from 'next/head';

import type {GetServerSideProps} from 'next';
import type {TUserProfile} from '@/components/utils/cards';

import {SharedPage} from '@/components/SharedPage';

const baseUrl = 'https://wrapped.jumper.exchange';
export default function Home({profile}: {profile: TUserProfile & {address: string}}): ReactElement {
	useEffect(() => {
		// Pre-warm the OG image as soon as the page loads
		fetch(`https://wrapped.jumper.exchange/api/og?address=${profile.address}`, {method: 'HEAD'}).catch(() => {
			/* ignore errors */
		});
	}, [profile.address]);

	return (
		<>
			<Head>
				<meta
					property={'og:image'}
					content={`${baseUrl}/api/og?address=${profile.address}`}
				/>
				<meta
					name={'twitter:image'}
					content={`${baseUrl}/api/og?address=${profile.address}`}
				/>
				<meta
					property={'twitter:card'}
					content={'summary_large_image'}
				/>
			</Head>

			<SharedPage
				address={profile.address}
				profile={profile}
			/>
		</>
	);
}

type TAddressPageProps = {
	profile: TUserProfile;
};

export const getServerSideProps: GetServerSideProps<TAddressPageProps> = async context => {
	const address = typeof context.query.address === 'string' ? context.query.address : '';
	const profileEndpoint = await fetch(`https://jumper-wash.builtby.dad/user/${address}/og`);

	if (!profileEndpoint.ok) {
		return {
			notFound: true
		};
	}

	const profile: TUserProfile = await profileEndpoint.json();
	return {
		props: {profile: {...profile, address}}
	};
};
