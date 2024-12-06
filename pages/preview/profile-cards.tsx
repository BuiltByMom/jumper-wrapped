import type {ReactElement} from 'react';

import ChainWhaleCard from '@/components/cards/profiles/ChainWhale';
import DegenElderCard from '@/components/cards/profiles/DegenElder';
import DivaCardCard from '@/components/cards/profiles/Diva';
import MultiChainCard from '@/components/cards/profiles/Multichain';
import NoSleepCard from '@/components/cards/profiles/NoSleep';
import PaperHandedCard from '@/components/cards/profiles/PaperHanded';
import SerBridgealotCard from '@/components/cards/profiles/SerBridgealot';
import SolanaSoldierCard from '@/components/cards/profiles/SolanaSoldier';
import SwapaholicCard from '@/components/cards/profiles/Swapaholic';

export default function Index(): ReactElement {
	return (
		<div
			className={
				'mx-auto grid grid-cols-1 items-center justify-center gap-4 p-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6'
			}>
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
			<ChainWhaleCard width={440} />
			<DegenElderCard width={440} />
			<SwapaholicCard width={440} />
			<SolanaSoldierCard width={440} />
			<PaperHandedCard width={440} />
			<MultiChainCard
				width={440}
				numberOfChains={3}
				topRatio={1}
			/>
			<NoSleepCard
				width={440}
				timestamp={'234234234'}
			/>
		</div>
	);
}
