import type {ReactElement} from 'react';

import DivaCardCard from '@/components/cards/share/Diva';
import SerBridgealotCard from '@/components/cards/share/SerBridgealot';

export default function Index(): ReactElement {
	return (
		<div className={'flex items-center justify-center'}>
			<DivaCardCard
				tokens={['DAI', 'USDC', 'USDT']}
				topRatio={42.42}
				width={440}
			/>
			<SerBridgealotCard
				volumeInUSD={1234567.89}
				topRatio={42.42}
				width={440}
			/>
		</div>
	);
}
