import DayOfWeekCard from '../cards/stats/DayOfWeek';
import PlaceholderCard from '../cards/stats/Placeholder';
import TopBridgeChain from '../cards/stats/TopBridgeChain';
import VolumeRankCard from '../cards/stats/VolumeRank';
import WashTradeCard from '../cards/stats/WashTrade';

import type {ReactElement} from 'react';
import type {TDayOfWeek} from '../cards/stats/DayOfWeek';

import DayOfYearCard from '@/components/cards/stats/DayOfYear';
import MonthCard from '@/components/cards/stats/Month';
import TimeOfDayCard from '@/components/cards/stats/TimeOfDay';
import VolumeCard from '@/components/cards/stats/Volume';

/************************************************************************************************
 * Card Types Definition
 * Each card type represents a specific statistic or achievement for the user
 ************************************************************************************************/
export type TCardTypes = {
	Volume: {
		kind: 'swap' | 'bridge';
		volume: string;
		percentile: string;
	};
	VolumePercentile: {
		kind: 'swap' | 'bridge';
		percentile: string;
	};
	FavoriteToken: {
		address: string;
		volume: number;
		symbol: string;
	};
	ChainsExplored: {
		chainsExplored: number;
		position: number;
	};
	BelovedChain: {
		chain: string;
		volume: number;
	};
	TopBridgeChain: {
		chain: string;
		volume: number;
	};
	BusiestHour: string;
	BusiestDay: string;
	BusiestMonth: string;
	BusiestWeekday: TDayOfWeek;
	JumperWash: {
		hasWashedNFT: boolean;
	};
	TransactionCount: number;
};

export type TPossibleStatsCardsIDs = keyof TCardTypes;

export type TCardData<T extends TPossibleStatsCardsIDs = TPossibleStatsCardsIDs> = {
	id: T;
	data: TCardTypes[T];
};

/************************************************************************************************
 * Card Components Map
 * Maps card IDs to their respective React components
 ************************************************************************************************/
export const CARD_COMPONENTS: {
	[K in TPossibleStatsCardsIDs]: (data: TCardTypes[K]) => ReactElement;
} = {
	Volume: ({volume, kind, percentile}) => (
		<VolumeCard
			volume={volume}
			kind={kind}
			percentile={percentile}
		/>
	),
	VolumePercentile: ({kind, percentile}) => (
		<VolumeRankCard
			kind={kind}
			percentile={percentile}
		/>
	),
	BusiestHour: hour => <TimeOfDayCard hour={hour} />,
	ChainsExplored: ({chainsExplored}) => (
		<PlaceholderCard
			title={'Chains Explored'}
			content={`You've explored ${chainsExplored} chains`}
			copy={'Quite the adventurer!'}
		/>
	),
	FavoriteToken: ({symbol}) => (
		<PlaceholderCard
			title={'Favorite Token'}
			content={`Your favorite token was ${symbol}`}
			copy={'Good choice!'}
		/>
	),
	BelovedChain: ({chain}) => <TopBridgeChain chainName={chain} />,
	TopBridgeChain: ({chain}) => (
		<PlaceholderCard
			title={'Top Bridge Chain'}
			content={`Your top bridge chain was ${chain}`}
			copy={'Good choice!'}
		/>
	),
	JumperWash: () => <WashTradeCard />,
	BusiestDay: dayOfYear => <DayOfYearCard dayOfYear={dayOfYear} />,
	BusiestMonth: month => <MonthCard month={month} />,
	BusiestWeekday: weekday => <DayOfWeekCard dayOfWeek={weekday as TDayOfWeek} />,
	TransactionCount: volume => (
		<PlaceholderCard
			title={'Transaction Count'}
			content={`You've made ${volume} transactions`}
			copy={'Good choice!'}
		/>
	)
};

/************************************************************************************************
 * Get Card Component
 * Retrieves the appropriate component for a given card ID and data
 ************************************************************************************************/
export function getCardComponent(id: TPossibleStatsCardsIDs, data: TCardTypes[TPossibleStatsCardsIDs]): ReactElement {
	if (!CARD_COMPONENTS[id]) {
		throw new Error(`Card component for ${id} not found`);
	}

	return CARD_COMPONENTS[id](data as never);
}

/************************************************************************************************
 * Fetch User Cards
 * Retrieves and formats user statistics into card components
 ************************************************************************************************/
export async function fetchUserCards(address: string): Promise<TCardData[]> {
	try {
		const response = await fetch('https://jumper-wash.builtby.dad/user/0x10001192576E8079f12d6695b0948C2F41320040');
		if (!response.ok) {
			throw new Error('Failed to fetch user stats');
		}

		const cards: TCardData[] = await response.json();
		if (!Array.isArray(cards)) {
			throw new Error('Invalid API response format');
		}

		return cards;
	} catch (error) {
		console.error('Error fetching user cards:', error);
		return [];
	}
}
