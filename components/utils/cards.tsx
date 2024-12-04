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
		volume: number;
		position: number;
	};
	Wen: {
		timestamp: number;
	};
	ChainsExplored: {
		chainsExplored: number;
		position: number;
	};
	TopTradedBags: {
		tokens: {
			symbol: string;
			volume: number;
		}[];
	};
	BridgeVolumeToSolana: {
		volume: number;
	};
	DumpToken: {
		address: string;
		volume: number;
		symbol: string;
	};
	BoughtToken: {
		address: string;
		volume: number;
		symbol: string;
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
	JumperWash: {
		hasWashedNFT: boolean;
	};
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
	TradingStreak: {
		days: number;
		startDate: string;
		endDate: string;
	};
	SolanaVolume: {
		volume: number;
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
	Volume: ({volume, position}) => (
		<VolumeCard
			volume={volume}
			position={position}
		/>
	),
	Wen: ({timestamp}) => <TimeCard timestamp={String(timestamp)} />,
	ChainsExplored: ({chainsExplored}) => <PlaceholderCard volume={chainsExplored} />,
	TopTradedBags: ({tokens}) => <PlaceholderCard volume={tokens[0].volume} />, // Need specific component
	BridgeVolumeToSolana: ({volume}) => <PlaceholderCard volume={volume} />,
	DumpToken: ({volume}) => <PlaceholderCard volume={volume} />,
	BoughtToken: ({volume}) => <PlaceholderCard volume={volume} />,
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
	},
	TradingStreak: ({days}) => <PlaceholderCard volume={days} />,
	SolanaVolume: ({volume}) => <PlaceholderCard volume={volume} />
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
