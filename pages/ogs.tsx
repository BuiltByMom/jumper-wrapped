import Image from 'next/image';

import type {ReactElement} from 'react';

const availableProfiles = [
	'bridgealot',
	'multichain',
	'diva',
	'nosleep',
	'chainwhale',
	'elder',
	'swapaholic',
	'solanaSoldier'
];

export default function Index(): ReactElement {
	return (
		<div className={'grid grid-cols-2 items-center justify-center gap-4 p-10 md:grid-cols-2'}>
			{availableProfiles.map(profile => (
				<Image
					key={profile}
					src={`/api/og?profile=${profile}&v=4`}
					alt={'OG'}
					width={1200}
					height={630}
				/>
			))}
		</div>
	);
}
