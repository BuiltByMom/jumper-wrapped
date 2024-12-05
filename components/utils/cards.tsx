import PlaceholderCard from '../cards/stat/Placeholder';

import type {ReactElement} from 'react';

import DayCard from '@/components/cards/stat/Day';
import {MonthCard} from '@/components/cards/stat/Month';
import TimeCard from '@/components/cards/stat/Time';
import VolumeCard from '@/components/cards/stat/Volume';

/************************************************************************************************
 * Card Types Definition
 * Each card type represents a specific statistic or achievement for the user
 ************************************************************************************************/
export type TCardTypes = {
	Volume: {
		kind: 'swap' | 'bridge';
		volume: number;
		rank: number;
	};
	VolumeRank: {
		kind: 'swap' | 'bridge';
		rank: number;
	};
	Wen: {
		timestamp: number; // Night or day, timestamp
	};
	DumpToken: {
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
		chainId: number;
		volume: number;
		name: string;
	};
	TopBridgeChain: {
		chainId: number;
		count: number;
		name: string;
	};

	// DAY / MONTH / WEEKDAY
	BusiestDay: {
		date: string;
		volume: number;
	};
	BusiestMonth: {
		month: string;
		volume: number;
	};
	BusiestWeekday: {
		weekday: string;
		volume: number;
	};

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
	Volume: ({volume, kind, rank}) => (
		<VolumeCard
			volume={volume}
			kind={kind}
			rank={rank}
		/>
	),
	VolumeRank: ({rank, kind}) => (
		<PlaceholderCard
			volume={rank}
			kind={kind}
		/>
	),
	Wen: ({timestamp}) => <TimeCard timestamp={String(timestamp)} />,
	ChainsExplored: ({chainsExplored}) => <PlaceholderCard volume={chainsExplored} />,
	DumpToken: ({volume}) => <PlaceholderCard volume={volume} />,
	BelovedChain: ({volume}) => <PlaceholderCard volume={volume} />,
	TopBridgeChain: ({count}) => <PlaceholderCard volume={count} />,
	JumperWash: () => <PlaceholderCard volume={0} />, // Need specific component
	BusiestDay: ({date}) => {
		const day = new Date(Number(date)).getDate().toString();
		const month = new Date(Number(date)).toLocaleString('en-US', {month: 'long'});
		return (
			<DayCard
				day={day}
				month={month}
			/>
		);
	},
	BusiestMonth: ({month}) => {
		const monthName = new Date(Number(month)).toLocaleString('en-US', {month: 'long'});
		return <MonthCard month={monthName} />;
	},
	BusiestWeekday: ({weekday}) => {
		const day = new Date(Number(weekday)).toLocaleString('en-US', {weekday: 'long'});
		return <PlaceholderCard day={day} />;
	}
};

/************************************************************************************************
 * Fetch User Cards
 * Retrieves and formats user statistics into card components
 ************************************************************************************************/
export async function fetchUserCards(address: string): Promise<TCardData[]> {
	try {
		const response = await fetch(`/api/user-stats/${address}`);
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
