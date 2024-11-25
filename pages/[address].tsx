import type {ReactElement} from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/carousel';
import {Header} from '@/components/common/Header';
import {MainPageBackgound} from '@/components/MainPageBackgound';

export default function Index(): ReactElement {
	return (
		<div className={'flex h-screen w-full items-center justify-center bg-violet-light'}>
			<MainPageBackgound />
			<Header set_isWalletSelectorOpen={() => {}} />
			<div className={'relative w-[800px] px-20'}>
				<Carousel
					opts={{
						align: 'start'
					}}
					className={'w-full'}>
					<CarouselContent className={'-ml-2 md:-ml-4'}>
						{[
							{name: 'lol', description: 'kek'},
							{name: 'lol1', description: 'kek'},
							{name: 'lol2', description: 'kek'},
							{name: 'lol3', description: 'kek'}
						].map((game, index) => (
							<CarouselItem
								key={index}
								className={' h-[600px] w-[440px] '}>
								<div
									className={
										'flex h-[600px] w-[440px] items-center justify-center rounded-[32px] border-4 border-[#B999FF] bg-black p-1'
									}>
									<p className={'text-3xl font-bold uppercase text-white'}>{game.name}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
					<CarouselDots arrayLength={4} />
				</Carousel>
			</div>
		</div>
	);
}
