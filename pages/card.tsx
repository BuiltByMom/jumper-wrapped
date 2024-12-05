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

			{CARD_COMPONENTS.Volume({volume: '34233', percentile: '0.19', kind: 'swap'})}
			{CARD_COMPONENTS.Volume({volume: '4564545', percentile: '0.42', kind: 'swap'})}
			{CARD_COMPONENTS.BusiestHour('14')}
			{CARD_COMPONENTS.BusiestHour('21')}
			{CARD_COMPONENTS.ChainsExplored({chainsExplored: 123, position: 4})}
			{CARD_COMPONENTS.FavoriteToken({volume: 123, address: '0x123', symbol: 'DAI'})}
			{CARD_COMPONENTS.BelovedChain({volume: 123, chainId: 1, name: 'Solana'})}
			{CARD_COMPONENTS.TopBridgeChain({count: 123, chainId: 1, name: 'Solana'})}
			{CARD_COMPONENTS.JumperWash({hasWashedNFT: true})}
			{CARD_COMPONENTS.BusiestDay('245')}
			{CARD_COMPONENTS.BusiestMonth('November')}
			{CARD_COMPONENTS.BusiestWeekday('Monday')}
		</div>
	);
}
