import {type ReactElement} from 'react';

import ChainWhaleCard from '../cards/profiles/ChainWhale';
import DegenElderCard from '../cards/profiles/DegenElder';
import DivaCardCard from '../cards/profiles/Diva';
import MultiChainCard from '../cards/profiles/Multichain';
import NoobCard from '../cards/profiles/Noob';
import NoSleepCard from '../cards/profiles/NoSleep';
import PaperHandedCard from '../cards/profiles/PaperHanded';
import SerBridgealotCard from '../cards/profiles/SerBridgealot';
import SolanaSoldierCard from '../cards/profiles/SolanaSoldier';
import SwapaholicCard from '../cards/profiles/Swapaholic';
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, useCarousel} from '../carouselContext';
import {JumperPopup} from '../JumperPopup';
import {getCardComponent} from '../utils/cards';
import {CarouselCard} from './Card';

import type {TUserProfile} from '../utils/cards';
import type {TCarouselProps} from './types';

export function ProfileByID(props: {
	profile: TUserProfile | null;
	disableAnimation?: boolean;
	noShare?: boolean;
	size?: number;
}): ReactElement {
	const size = props.size || 440;
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const {profile, disableAnimation, noShare} = props;
	if (!profile) {
		return (
			<NoobCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 1) {
		return (
			<SerBridgealotCard
				volumeInUSD={1234567.89}
				topRatio={42.42}
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 2) {
		return (
			<NoSleepCard
				width={size}
				timestamp={'234234234'}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 3) {
		return (
			<MultiChainCard
				width={size}
				numberOfChains={profile.numberOfChains}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 4) {
		return (
			<SwapaholicCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 5) {
		return (
			<DegenElderCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 6) {
		return (
			<ChainWhaleCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 7) {
		return (
			<SolanaSoldierCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 8) {
		return (
			<DivaCardCard
				width={size}
				topRatio={42.42}
				tokens={['DAI', 'USDC', 'USDT']}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	if (profile.profileId === 9) {
		return (
			<PaperHandedCard
				width={size}
				disableAnimation={disableAnimation}
				noShare={noShare}
			/>
		);
	}
	return (
		<NoobCard
			width={size}
			disableAnimation={disableAnimation}
			noShare={noShare}
		/>
	);
}

/************************************************************************************************
 * Carousel Component
 * Main carousel implementation for displaying user stats cards
 * Features:
 * - Responsive design
 * - Progressive card reveal
 * - Navigation controls
 * - Social sharing integration
 * - Final card with sharing options
 ************************************************************************************************/
export function Carousel({cards, profile}: TCarouselProps): ReactElement {
	const {canScrollNext} = useCarousel();

	return (
		<div>
			<div className={'z-10 w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4 '}>
					{[...cards].map((_, index) => {
						return (
							<CarouselItem
								key={index}
								className={'h-screen w-screen md:h-[732px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
								<CarouselCard index={index}>
									{getCardComponent(cards[index].id, cards[index].data)}
								</CarouselCard>
							</CarouselItem>
						);
					})}
					<CarouselItem className={'h-screen w-screen md:h-[732px] md:w-[440px] xl:h-[1200px] xl:w-[660px]'}>
						<CarouselCard index={cards.length}>
							<div
								className={
									'relative flex items-center justify-center max-md:mt-16 max-md:scale-75 max-sm:scale-[0.6] max-xs:mt-64'
								}>
								<ProfileByID profile={profile} />
							</div>
							<div className={'block md:hidden'}>
								<JumperPopup />
							</div>
						</CarouselCard>
					</CarouselItem>
				</CarouselContent>
			</div>
			<div className={'hidden md:block'}>{!canScrollNext ? <JumperPopup /> : null}</div>
			<div
				className={
					'pointer-events-none absolute inset-0 z-10 mx-auto w-screen md:w-[800px] md:px-20 xl:w-[1200px]'
				}>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</div>
	);
}
