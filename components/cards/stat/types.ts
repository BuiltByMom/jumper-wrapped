import type {HTMLAttributes} from 'react';

/************************************************************************************************
 * Shared Types for Stat Cards
 * Base types and interfaces used across different stat card components
 ************************************************************************************************/
export type TBaseCardProps = HTMLAttributes<HTMLDivElement>;

export type TWithVolume = {
	volume: string;
	percentile: string;
};

export type TWithKind = {
	kind: 'swap' | 'bridge';
};
