'use client';

import * as React from 'react';
import useEmblaCarousel, {type UseEmblaCarouselType} from 'embla-carousel-react';

import {ButtonArrow} from './common/ButtonArrow';
import {cl} from './utils/tools';

import type {Button} from './common/Button';

export type TCarouselApi = UseEmblaCarouselType[1];
type TUseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type TCarouselOptions = TUseCarouselParameters[0];
type TCarouselPlugin = TUseCarouselParameters[1];

type TCarouselProps = {
	opts?: TCarouselOptions;
	plugins?: TCarouselPlugin;
	orientation?: 'horizontal' | 'vertical';
	setApi?: (api: TCarouselApi) => void;
	showDots?: boolean;
};

type TCarouselContextProps = {
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	api: ReturnType<typeof useEmblaCarousel>[1];
	scrollPrev: () => void;
	scrollNext: () => void;
	canScrollPrev: boolean;
	canScrollNext: boolean;
	selectedIndex: number;
	scrollTo: (index: number) => void;
	set_isComplete: (value: boolean) => void;
	isComplete: boolean;
} & TCarouselProps;

const CarouselContext = React.createContext<TCarouselContextProps | null>(null);

export function useCarousel(): TCarouselContextProps {
	const context = React.useContext(CarouselContext);

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />');
	}

	return context;
}

export const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & TCarouselProps>(
	// eslint-disable-next-line @typescript-eslint/naming-convention
	({orientation = 'horizontal', opts, setApi, className, children, ...props}, ref) => {
		const [carouselRef, api] = useEmblaCarousel(
			{
				...opts,
				axis: orientation === 'horizontal' ? 'x' : 'y',
				align: 'center',
				slidesToScroll: 1,
				skipSnaps: false,
				startIndex: 0,
				containScroll: 'keepSnaps',
				dragFree: false,
				...opts
			},
			[]
		);
		const [canScrollPrev, set_canScrollPrev] = React.useState(false);
		const [canScrollNext, set_canScrollNext] = React.useState(true);
		const [selectedIndex, set_selectedIndex] = React.useState(0);
		const [isComplete, set_isComplete] = React.useState(false);

		const scrollPrev = React.useCallback(() => {
			api?.scrollPrev();
			set_isComplete(false);
		}, [api]);

		const scrollNext = React.useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const scrollTo = React.useCallback(
			(index: number) => {
				api?.scrollTo(index);
			},
			[api]
		);

		const handleKeyDown = React.useCallback(
			(event: KeyboardEvent) => {
				if (event.key === 'ArrowLeft') {
					event.preventDefault();
					scrollPrev();
				} else if (event.key === 'ArrowRight') {
					event.preventDefault();
					scrollNext();
				}
			},
			[scrollPrev, scrollNext]
		);

		React.useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		React.useEffect(() => {
			if (!api) {
				return;
			}

			const onSelect = (): void => {
				const currentIndex = api.selectedScrollSnap();
				const totalSlides = api.scrollSnapList().length;
				set_selectedIndex(currentIndex);
				set_canScrollPrev(api.canScrollPrev());
				set_canScrollNext(currentIndex < totalSlides - 1);
			};

			api.on('select', onSelect);
			api.on('reInit', onSelect);

			onSelect();

			return () => {
				api.off('select', onSelect);
				api.off('reInit', onSelect);
			};
		}, [api]);

		React.useEffect(() => {
			window.addEventListener('keydown', handleKeyDown);
			return () => {
				window.removeEventListener('keydown', handleKeyDown);
			};
		}, [handleKeyDown]);

		return (
			<CarouselContext.Provider
				value={{
					carouselRef,
					api: api,
					opts,
					orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
					scrollPrev,
					scrollNext,
					canScrollPrev,
					canScrollNext,
					selectedIndex,
					scrollTo,
					set_isComplete,
					isComplete
				}}>
				<div
					ref={ref}
					className={cl('relative', className)}
					role={'region'}
					aria-roledescription={'carousel'}
					tabIndex={0}
					{...props}>
					{children}
				</div>
			</CarouselContext.Provider>
		);
	}
);
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({className, ...props}, ref) => {
		const {carouselRef} = useCarousel();

		return (
			<div
				ref={carouselRef}
				className={'overflow-hidden'}>
				<div
					ref={ref}
					className={cl('flex', className)}
					{...props}
				/>
			</div>
		);
	}
);
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({className, ...props}, ref) => {
		return (
			<div
				ref={ref}
				role={'group'}
				aria-roledescription={'slide'}
				className={cl('min-w-full flex-[0_0_100%]', 'flex items-center justify-center', className)}
				{...props}
			/>
		);
	}
);
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
	({className, ...props}) => {
		const {scrollPrev, canScrollPrev} = useCarousel();

		return (
			<>
				<div className={'hidden md:block'}>
					<ButtonArrow
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						className={cl('hidden md:flex absolute z-30 top-1/2 -mt-7', '-left-16', className)}
						direction={'left'}
						{...props}
					/>
				</div>
				<button
					className={'screen absolute left-0 top-[96px] z-[1000] h-[calc(100vh-96px)] w-[50vw] md:hidden'}
					onClick={scrollPrev}
					disabled={!canScrollPrev}
				/>
			</>
		);
	}
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
	({className, ...props}) => {
		const {scrollNext, canScrollNext} = useCarousel();

		return (
			<>
				<div className={'hidden md:block'}>
					<ButtonArrow
						onClick={scrollNext}
						disabled={!canScrollNext}
						className={cl('hidden md:flex absolute z-30 top-1/2 -mt-7', '-right-16', className)}
						direction={'right'}
						{...props}
					/>
				</div>
				<button
					className={'screen absolute right-0 top-[96px] z-[1000] h-[calc(100vh-96px)] w-[50vw] md:hidden'}
					onClick={scrollNext}
					disabled={!canScrollNext}
				/>
			</>
		);
	}
);
CarouselNext.displayName = 'CarouselNext';

export const CarouselDots = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {arrayLength?: number}
>(({className, arrayLength, ...props}, ref) => {
	const {api, selectedIndex, set_isComplete, isComplete} = useCarousel();
	const slideCount = api?.scrollSnapList().length || 0;
	const [isAnimating, set_isAnimating] = React.useState(false);
	const totalSlides = arrayLength || slideCount;
	const duration = 15 * 1000;

	// Start animation on mount
	React.useEffect(() => {
		const startTimer = setTimeout(() => {
			set_isAnimating(true);
		}, 100);

		return () => clearTimeout(startTimer);
	}, []);

	React.useEffect(() => {
		if (!api || isComplete) {
			return;
		}

		const timer = setTimeout(() => {
			if (selectedIndex === totalSlides - 1) {
				set_isComplete(true);
			} else {
				api.scrollNext();
				set_isAnimating(true);
			}
		}, duration);

		return () => clearTimeout(timer);
	}, [api, selectedIndex, totalSlides, isComplete, set_isComplete, duration]);

	const handleDotClick = (index: number): void => {
		if (!api) {
			return;
		}

		set_isAnimating(false);
		api.scrollTo(index);
		set_isComplete(false);

		// Start animation after a brief delay
		setTimeout(() => {
			set_isAnimating(true);
		}, 50);
	};

	return (
		<div
			ref={ref}
			className={cl(
				'absolute md:top-[-40px] z-50 left-0 right-0 flex justify-center gap-2 h-10 items-center',
				className
			)}
			{...props}>
			{Array.from({length: totalSlides}).map((_, index) => (
				<div
					key={index}
					onClick={() => handleDotClick(index)}
					className={'group -m-4 cursor-pointer p-4'}>
					<div
						className={cl(
							'relative h-[5px] md:w-10 lg:w-20 xl:h-[8px] xl:w-24',
							'group-hover:h-3 rounded-full transition-all duration-100',
							'bg-[#ffffff1a] overflow-hidden'
						)}>
						<div
							className={cl(
								'absolute top-0 left-0 rounded-[4px] h-full bg-accent',
								index === selectedIndex
									? cl('transition-all duration-[15s] ease-linear', isAnimating ? 'w-full' : 'w-0')
									: 'w-0'
							)}
							onTransitionEnd={() => {
								if (index === selectedIndex && !isComplete) {
									set_isAnimating(false);
									setTimeout(() => {
										if (selectedIndex === totalSlides - 1) {
											set_isComplete(true);
										} else {
											api?.scrollNext();
											set_isAnimating(true);
										}
									}, 50);
								}
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
});
CarouselDots.displayName = 'CarouselDots';
