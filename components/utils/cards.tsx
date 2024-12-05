import PlaceholderCard from '../cards/stat/Placeholder';
import TopBridgeChain from '../cards/stat/TopBridgeChain';
import VolumeRankCard from '../cards/stat/VolumeRank';

import type {ReactElement} from 'react';

import DayOfYearCard from '@/components/cards/stat/DayOfYear';
import MonthCard from '@/components/cards/stat/Month';
import TimeOfDayCard from '@/components/cards/stat/TimeOfDay';
import VolumeCard from '@/components/cards/stat/Volume';

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

	// One of them: 33/33/33
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
	// DAY / MONTH / WEEKDAY
	BusiestDay: string;
	BusiestMonth: string;
	BusiestWeekday: string;

	// ONLY FOR SOLANA
	JumperWash: {
		hasWashedNFT: boolean;
	};
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
	ChainsExplored: ({chainsExplored}) => <PlaceholderCard volume={chainsExplored} />,
	FavoriteToken: ({volume}) => <PlaceholderCard volume={volume} />,
	BelovedChain: ({chain}) => <TopBridgeChain chainName={chain} />,
	TopBridgeChain: ({chain}) => <TopBridgeChain chainName={chain} />,
	JumperWash: () => <PlaceholderCard volume={0} />, // Need specific component
	BusiestDay: dayOfYear => <DayOfYearCard dayOfYear={dayOfYear} />,
	BusiestMonth: month => <MonthCard month={month} />,
	BusiestWeekday: weekday => <PlaceholderCard day={weekday} />
};

export function getCardComponent(id: TPossibleStatsCardsIDs, data: TCardTypes[TPossibleStatsCardsIDs]): ReactElement {
	if (!CARD_COMPONENTS[id]) {
		throw new Error(`Card component for ${id} not found`);
	}

	return CARD_COMPONENTS[id](data as any);
}

/************************************************************************************************
 * Fetch User Cards
 * Retrieves and formats user statistics into card components
 ************************************************************************************************/
export async function fetchUserCards(address: string): Promise<TCardData[]> {
	try {
		const response = await fetch(`https://jumper-wash.builtby.dad/user/${address.toLowerCase()}`);
		if (!response.ok) {
			throw new Error('Failed to fetch user stats');
		}

		// The API should return an array of TCardData, max 5 items
		const cards: TCardData[] = await response.json();

		// Validate the response
		if (!Array.isArray(cards)) {
			throw new Error('Invalid API response format');
		}

		return cards;
	} catch (error) {
		console.error('Error fetching user cards:', error);
		return [];
	}
}
