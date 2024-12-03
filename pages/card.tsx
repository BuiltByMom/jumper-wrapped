import type {ReactElement} from 'react';

import MultiChainCard from '@/components/cards/share/Multichain';
import SerBridgealotCard from '@/components/cards/share/SerBridgealot';

export default function Index(): ReactElement {
	return (
		<div className={'flex size-full items-center justify-center p-20'}>
			<MultiChainCard
				numberOfChains={3}
				topRatio={42.42}
				width={440}
			/>
			<SerBridgealotCard width={300} />
		</div>
	);
}
