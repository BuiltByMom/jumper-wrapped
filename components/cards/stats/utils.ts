/************************************************************************************************
 * Stat Card Utilities
 * Helper functions for formatting and calculations used in stat cards
 ************************************************************************************************/
export function formatVolume(volume: string | number): string {
	const numVolume = Number(Number(volume).toFixed(0));
	if (numVolume >= 100_000 && numVolume < 1_000_000) {
		return `$${Math.floor(numVolume / 1_000)}k`;
	}
	if (numVolume >= 1_000_000) {
		return `$${(numVolume / 1_000_000).toFixed(1)}M`;
	}
	return `$${numVolume.toLocaleString()}`;
}

export function getCardVariant(percentile: string): 'Green' | 'Purple' {
	return Number(percentile) <= 0.5 ? 'Green' : 'Purple';
}

export function getLocalTimeFromUTC(hour: string | number): {
	time: string;
	amPm: string;
	dayOrNight: string;
} {
	const date = new Date();
	date.setUTCHours(Number(hour), 0, 0, 0);
	const localHour = date.getHours();

	const amPm = localHour >= 12 ? 'PM' : 'AM';
	const isNight = localHour >= 20 || localHour < 8;
	const timeOfDay = isNight ? 'NIGHT' : 'DAY';
	const timeAs12 = `${localHour % 12 || 12}:00`;

	return {
		time: timeAs12,
		amPm,
		dayOrNight: timeOfDay
	};
}
