import {Fragment, type ReactElement} from 'react';
import Head from 'next/head';

import {CARD_COMPONENTS} from '@/components/utils/cards';

export default function Index(): ReactElement {
	return (
		<Fragment>
			<Head>
				<meta
					property={'og:image'}
					content={'https://wrapped.jumper.exchange/og/og.jpg'}
				/>
				<meta
					name={'twitter:image'}
					content={'https://wrapped.jumper.exchange/og/og.jpg'}
				/>
			</Head>
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

				{CARD_COMPONENTS.BelovedChain({chain: 'solana'})}
				{CARD_COMPONENTS.BelovedChain({chain: 'ethereum'})}
				{CARD_COMPONENTS.BelovedChain({chain: 'linea'})}
				{CARD_COMPONENTS.TopBridgeChain({chain: 'arbitrum'})}
				{CARD_COMPONENTS.TopBridgeChain({chain: 'optimism'})}
				{CARD_COMPONENTS.TopBridgeChain({chain: 'base'})}

				{CARD_COMPONENTS.ChainsExplored({amountOfChains: 1, topRatio: 0.1})}
				{CARD_COMPONENTS.ChainsExplored({amountOfChains: 2, topRatio: 0.2})}
				{CARD_COMPONENTS.ChainsExplored({amountOfChains: 6, topRatio: 0.5})}
				{CARD_COMPONENTS.ChainsExplored({amountOfChains: 7, topRatio: 0.8})}
				{CARD_COMPONENTS.FavoriteToken({symbol: 'DAI'})}
				{CARD_COMPONENTS.FavoriteToken({symbol: 'ETH'})}
				{CARD_COMPONENTS.JumperWash({hasWashedNFT: true})}
				{CARD_COMPONENTS.TransactionsNumber({percentile: '0.19', value: 41})}
				{CARD_COMPONENTS.TransactionsNumber({percentile: '0.19', value: 104})}
				{CARD_COMPONENTS.TransactionsNumber({percentile: '0.19', value: 1450})}
				{CARD_COMPONENTS.Intermediate({statsAmount: 4})}
				{CARD_COMPONENTS.Intermediate({statsAmount: 5})}
			</div>
		</Fragment>
	);
}
