import Image from 'next/image';

import type {ReactElement} from 'react';

const testingAddresses = [
	'0x000000006f457c0f8f560333d9c2877287d92a92',
	'0x000000005ebfb5a950f8fdf3248e99614a7ff220',
	'0x000000000000f8e4fe2a98574fa81c728e340764',
	'0x00000002d88f9b3f4eb303564817fff4adcde46f',
	'0x00000000e6b80f78f65808e1d7df646955f573c2',
	'0x0000000000f6bb48c5dcd7be40a8008d2d91f59d',
	'0x00000000091b2041a94d32b05556c52028161b28',
	'124xy4m73tnrsoqyynwqbvsbfkzfnx2ru8hglarwafhw',
	'0x00000000793969f85351f0ba29f39468e577ad74',
	'0x000000000036277944858dfe6b9ae18c929e570c'
];

export default function Index(): ReactElement {
	return (
		<div className={'grid grid-cols-2 items-center justify-center gap-4 p-10 md:grid-cols-2'}>
			{testingAddresses.map(address => (
				<Image
					key={address}
					src={`/api/og?address=${address}&v=11`}
					alt={'OG'}
					width={1200}
					height={630}
				/>
			))}
		</div>
	);
}
