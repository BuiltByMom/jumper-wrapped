import Link from 'next/link';

import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './carouselContext';
import {Button} from './common/Button';

import type {ReactElement} from 'react';

export function Carousel({
	cards,
	profile
}: {
	cards: {name: string; description: string}[];
	profile?: string;
}): ReactElement {
	return (
		<div className={'relative w-[800px] px-20 xl:w-[1200px]'}>
			<CarouselContent className={'-ml-2 md:-ml-4'}>
				{cards.map((game, index) => (
					<CarouselItem
						key={index}
						className={'h-[655px] w-[440px] xl:h-[1200px] xl:w-[660px]'}>
						{index < cards.length - 1 ? (
							<div
								className={
									'flex h-[600px] w-[440px] items-center justify-center rounded-[32px] border-4 border-[#B999FF] bg-black p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
								}>
								<p className={'text-3xl font-bold uppercase text-white'}>{game.name}</p>
							</div>
						) : (
							<div className={'relative z-40'}>
								<div
									className={
										'flex h-[600px] w-[440px] items-center justify-center rounded-[32px] border-4 border-accent bg-black bg-gradient-to-b from-[#9700F4] to-[#3238C9] p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
									}>
									<p className={'text-3xl font-bold uppercase text-white'}>{game.name}</p>
								</div>
								<Link href={`/wrapped?profile=${profile}`}>
									<Button
										className={
											'absolute bottom-[-25px] left-1/2 z-50 -translate-x-1/2 xl:bottom-[-32px] xl:!w-[320px]'
										}>
										<p className={'text-2xl font-bold uppercase text-black xl:text-3xl'}>
											{'Share on X'}
										</p>
									</Button>
								</Link>
							</div>
						)}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</div>
	);
}
