import type {ReactNode} from 'react';
import type {TCardData, TUserProfile} from '../utils/cards';

/************************************************************************************************
 * Carousel Types
 * Type definitions for the carousel components and animations
 ************************************************************************************************/
export type TCarouselProps = {
	cards: TCardData[];
	profile: TUserProfile;
};

export type TCarouselCardProps = {
	index: number;
	children: ReactNode;
};
