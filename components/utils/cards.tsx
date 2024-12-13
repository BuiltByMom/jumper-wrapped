import BelovedChain from '../cards/stats/BelovedChain';
import ChainExploredCard from '../cards/stats/ChainExplored';
import DayOfWeekCard from '../cards/stats/DayOfWeek';
import FavTokenCard from '../cards/stats/FavToken';
import {Intermediate} from '../cards/stats/Intermediate';
import NumberOfTradeCard from '../cards/stats/NumberOfTrade';
import TopBridgedChainCard from '../cards/stats/TopBridgedChain';
import VolumeRankCard from '../cards/stats/VolumeRank';
import WashTradeCard from '../cards/stats/WashTrade';

import type {ReactElement} from 'react';
import type {TDayOfWeek} from '../cards/stats/DayOfWeek';

import DayOfYearCard from '@/components/cards/stats/DayOfYear';
import MonthCard from '@/components/cards/stats/Month';
import TimeOfDayCard from '@/components/cards/stats/TimeOfDay';
import VolumeCard from '@/components/cards/stats/Volume';

export type TUserProfile = {
	profileName: string;
	profileId: number;
	swapVolume: number;
	bridgeVolume: number;
	numberOfChains: number;
	favoriteChain: string;
	swapVolumeRank: string;
	bridgeVolumeRank: string;
	busiestHour?: string | undefined;
};

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
		symbol: string;
	};
	ChainsExplored: {
		amountOfChains: number;
		topRatio: number;
	};
	BelovedChain: {
		chain: string;
	};
	TopBridgeChain: {
		chain: string;
	};
	BusiestHour: string;
	BusiestDay: string;
	BusiestMonth: string;
	BusiestWeekday: TDayOfWeek;
	JumperWash: {
		hasWashedNFT: boolean;
	};
	Intermediate: {statsAmount: number};
	TransactionsNumber: {value: number; percentile: string};
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
	ChainsExplored: ({amountOfChains, topRatio}) => (
		<ChainExploredCard
			amountOfChains={amountOfChains}
			topRatio={topRatio}
		/>
	),
	FavoriteToken: ({symbol}) => <FavTokenCard tokenName={symbol} />,
	BelovedChain: ({chain}) => <BelovedChain chainName={chain} />,
	TopBridgeChain: ({chain}) => <TopBridgedChainCard chainName={chain} />,
	JumperWash: () => <WashTradeCard />,
	BusiestDay: dayOfYear => <DayOfYearCard dayOfYear={dayOfYear} />,
	BusiestMonth: month => <MonthCard month={month} />,
	BusiestWeekday: weekday => <DayOfWeekCard dayOfWeek={weekday as TDayOfWeek} />,
	Intermediate: ({statsAmount}) => <Intermediate statsAmount={statsAmount} />,
	TransactionsNumber: ({value}) => <NumberOfTradeCard count={value} />
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
		const response = await fetch(`https://jumper-wash.builtby.dad/user/${address}`);
		if (!response.ok) {
			return [];
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

export async function fetchUserProfile(address: string): Promise<TUserProfile | null> {
	try {
		const response = await fetch(`https://jumper-wash.builtby.dad/user/${address}/og`);
		if (!response.ok) {
			return null;
		}

		const profile: TUserProfile = await response.json();

		return profile;
	} catch (error) {
		console.error('Error fetching user profile:', error);
		return null;
	}
}
