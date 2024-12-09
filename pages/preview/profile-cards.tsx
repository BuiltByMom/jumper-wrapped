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
				'mx-auto grid grid-cols-1 items-center justify-center gap-10 p-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
			}>
			<DivaCardCard
				tokens={['DAI', 'USDC', 'USDT']}
				topRatio={42.42}
				width={440}
				disableAnimation
			/>
			<SerBridgealotCard
				volumeInUSD={1234567.89}
				topRatio={42.42}
				width={440}
				disableAnimation
			/>
			<ChainWhaleCard
				width={440}
				disableAnimation
			/>
			<DegenElderCard
				width={440}
				disableAnimation
			/>
			<SwapaholicCard
				width={440}
				disableAnimation
			/>
			<SolanaSoldierCard
				width={440}
				disableAnimation
			/>
			<PaperHandedCard
				width={440}
				disableAnimation
			/>
			<MultiChainCard
				width={440}
				numberOfChains={3}
				disableAnimation
			/>
			<NoSleepCard
				width={440}
				timestamp={'234234234'}
				disableAnimation
			/>
		</div>
	);
}
