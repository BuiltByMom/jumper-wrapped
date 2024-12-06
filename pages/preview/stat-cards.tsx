import type {ReactElement} from 'react';

import {CARD_COMPONENTS} from '@/components/utils/cards';

export default function Index(): ReactElement {
	return (
		<div
			className={
				'mx-auto grid grid-cols-1 items-center justify-center gap-4 p-0 md:grid-cols-2 md:p-10 lg:grid-cols-3 xl:grid-cols-6'
			}>
			{CARD_COMPONENTS.Volume({volume: '34233', percentile: '0.19', kind: 'swap'})}
			{CARD_COMPONENTS.Volume({volume: '4564545', percentile: '0.52', kind: 'bridge'})}
			{CARD_COMPONENTS.VolumePercentile({percentile: '0.19', kind: 'swap'})}
			{CARD_COMPONENTS.VolumePercentile({percentile: '0.52', kind: 'bridge'})}

			{CARD_COMPONENTS.BusiestHour('14')}
			{CARD_COMPONENTS.BusiestHour('21')}

			{CARD_COMPONENTS.BusiestDay('245')}
			{CARD_COMPONENTS.BusiestDay('21')}

			{CARD_COMPONENTS.BusiestMonth('December')}
			{CARD_COMPONENTS.BusiestMonth('March')}
			{CARD_COMPONENTS.BusiestMonth('June')}
			{CARD_COMPONENTS.BusiestMonth('September')}

			{CARD_COMPONENTS.BusiestWeekday('Monday')}
			{CARD_COMPONENTS.BusiestWeekday('Wednesday')}
			{CARD_COMPONENTS.BusiestWeekday('Friday')}
			{CARD_COMPONENTS.BusiestWeekday('Sunday')}

			{CARD_COMPONENTS.FavoriteToken({volume: 123, address: '0x123', symbol: 'DAI'})}
			{CARD_COMPONENTS.ChainsExplored({chainsExplored: 123, position: 4})}
			{CARD_COMPONENTS.TopBridgeChain({volume: 123, chain: 'solana'})}
			{CARD_COMPONENTS.TransactionCount(123)}

			{CARD_COMPONENTS.BelovedChain({volume: 123, chain: 'solana'})}
			{CARD_COMPONENTS.BelovedChain({volume: 123, chain: 'arbitrum'})}
			{CARD_COMPONENTS.BelovedChain({volume: 123, chain: 'optimism'})}
			{CARD_COMPONENTS.BelovedChain({volume: 123, chain: 'base'})}
			{CARD_COMPONENTS.JumperWash({hasWashedNFT: true})}
		</div>
	);
}
