import type {ReactElement} from 'react';

import DivaCardCard from '@/components/cards/share/Diva';
import SerBridgealotCard from '@/components/cards/share/SerBridgealot';
import {CARD_COMPONENTS} from '@/components/utils/cards';

export default function Index(): ReactElement {
	return (
		<div className={'grid grid-cols-3 items-center justify-center gap-4'}>
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

			{CARD_COMPONENTS.Volume({volume: 34233, rank: 4, kind: 'swap'})}
			{CARD_COMPONENTS.Volume({volume: 4564545, rank: 90, kind: 'swap'})}
			{CARD_COMPONENTS.Wen({timestamp: 1733195469})}
			{CARD_COMPONENTS.Wen({timestamp: 1733235069})}
			{CARD_COMPONENTS.ChainsExplored({chainsExplored: 123, position: 4})}
			{CARD_COMPONENTS.DumpToken({volume: 123, address: '0x123', symbol: 'DAI'})}
			{CARD_COMPONENTS.BelovedChain({volume: 123, chainId: 1, name: 'Solana'})}
			{CARD_COMPONENTS.TopBridgeChain({count: 123, chainId: 1, name: 'Solana'})}
			{CARD_COMPONENTS.JumperWash({hasWashedNFT: true})}
			{CARD_COMPONENTS.BusiestDay({date: '1733195469', volume: 123})}
			{CARD_COMPONENTS.BusiestMonth({month: '1733195469', volume: 123})}
			{CARD_COMPONENTS.BusiestWeekday({weekday: '1733195469', volume: 123})}
		</div>
	);
}
