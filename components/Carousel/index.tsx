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
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '../carouselContext';
import {getCardComponent} from '../utils/cards';
import {CarouselCard} from './Card';

import type {ReactElement} from 'react';
import type {TUserProfile} from '../utils/cards';
import type {TCarouselProps} from './types';

function ProfileByID({profile}: {profile: TUserProfile | null}): ReactElement {
	if (!profile) {
		return <NoobCard width={440} />;
	}
	if (profile.profileId === 1) {
		return (
			<SerBridgealotCard
				volumeInUSD={1234567.89}
				topRatio={42.42}
				width={440}
			/>
		);
	}
	if (profile.profileId === 2) {
		return (
			<NoSleepCard
				width={440}
				timestamp={'234234234'}
			/>
		);
	}
	if (profile.profileId === 3) {
		return (
			<MultiChainCard
				width={440}
				numberOfChains={profile.numberOfChains}
			/>
		);
	}
	if (profile.profileId === 4) {
		return <SwapaholicCard width={440} />;
	}
	if (profile.profileId === 5) {
		return <DegenElderCard width={440} />;
	}
	if (profile.profileId === 6) {
		return <ChainWhaleCard width={440} />;
	}
	if (profile.profileId === 7) {
		return <SolanaSoldierCard width={440} />;
	}
	if (profile.profileId === 8) {
		return (
			<DivaCardCard
				width={440}
				topRatio={42.42}
				tokens={['DAI', 'USDC', 'USDT']}
			/>
		);
	}
	if (profile.profileId === 9) {
		return <PaperHandedCard width={440} />;
	}
	return <NoobCard width={440} />;
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
	return (
		<div className={'relative'}>
			<div className={'relative z-10 w-screen'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
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
							<div>
								<div className={'relative max-sm:mb-40'}>
									<ProfileByID profile={profile} />
								</div>
							</div>
						</CarouselCard>
					</CarouselItem>
				</CarouselContent>
			</div>
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
