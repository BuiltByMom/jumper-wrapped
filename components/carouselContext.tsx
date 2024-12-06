'use client';

import {createContext, forwardRef, useCallback, useContext, useEffect, useState} from 'react';
import useEmblaCarousel, {type UseEmblaCarouselType} from 'embla-carousel-react';
import {useInterval, useTimeout} from 'usehooks-ts';

import {ButtonArrow} from './common/ButtonArrow';
import {cl} from './utils/tools';

import type {ComponentProps, HTMLAttributes} from 'react';
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

const CarouselContext = createContext<TCarouselContextProps | null>(null);

export function useCarousel(): TCarouselContextProps {
	const context = useContext(CarouselContext);

	if (!context) {
		throw new Error('useCarousel must be used within a <Carousel />');
	}

	return context;
}

export const Carousel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & TCarouselProps>(
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
		const [canScrollPrev, set_canScrollPrev] = useState(false);
		const [canScrollNext, set_canScrollNext] = useState(true);
		const [selectedIndex, set_selectedIndex] = useState(0);
		const [isComplete, set_isComplete] = useState(false);

		const scrollPrev = useCallback(() => {
			api?.scrollPrev();
			set_isComplete(false);
		}, [api]);

		const scrollNext = useCallback(() => {
			api?.scrollNext();
		}, [api]);

		const scrollTo = useCallback(
			(index: number) => {
				api?.scrollTo(index);
			},
			[api]
		);

		const handleKeyDown = useCallback(
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

		useEffect(() => {
			if (!api || !setApi) {
				return;
			}

			setApi(api);
		}, [api, setApi]);

		useEffect(() => {
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

		useEffect(() => {
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

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({className, ...props}, ref) => {
		const {carouselRef} = useCarousel();

		return (
			<div ref={carouselRef}>
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

export const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
	return (
		<div
			ref={ref}
			role={'group'}
			aria-roledescription={'slide'}
			className={cl('min-w-full flex-[0_0_100%]', 'flex items-center justify-center', className)}
			{...props}
		/>
	);
});
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
	({className, ...props}) => {
		const {scrollPrev, canScrollPrev} = useCarousel();

		return (
			<>
				<div className={'pointer-events-auto hidden cursor-pointer md:block'}>
					<ButtonArrow
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						className={cl('hidden md:flex absolute z-30 top-1/2 -mt-7', '-left-16', className)}
						direction={'left'}
						{...props}
					/>
				</div>
				<button
					className={
						'screen pointer-events-auto absolute left-0 top-[136px] z-[1000] h-[calc(100vh-136px)] w-[50vw] cursor-pointer md:hidden'
					}
					onClick={scrollPrev}
					disabled={!canScrollPrev}
				/>
			</>
		);
	}
);
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(({className, ...props}) => {
	const {scrollNext, canScrollNext} = useCarousel();

	return (
		<>
			<div className={'pointer-events-auto hidden cursor-pointer md:block'}>
				<ButtonArrow
					onClick={scrollNext}
					disabled={!canScrollNext}
					className={cl('hidden md:flex absolute z-30 top-1/2 -mt-7', '-right-16', className)}
					direction={'right'}
					{...props}
				/>
			</div>
			<button
				className={
					'screen pointer-events-auto absolute right-0 top-[136px] z-[1000] h-[calc(100vh-136px)] w-[50vw] cursor-pointer md:hidden'
				}
				onClick={scrollNext}
				disabled={!canScrollNext}
			/>
		</>
	);
});
CarouselNext.displayName = 'CarouselNext';

/************************************************************************************************
 * CarouselDots Component
 * Renders a row of dots representing carousel slides with progress indicators
 * - Shows progress animation for current slide
 * - Allows clicking dots to navigate between slides
 * - Tracks completed slides and auto-advances when progress reaches 100%
 * - Supports both desktop and mobile layouts
 ************************************************************************************************/
export const CarouselDots = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & {arrayLength?: number}>(
	({className, arrayLength, ...props}, ref) => {
		const {api, selectedIndex} = useCarousel();
		const slideCount = api?.scrollSnapList().length || 0;
		const [progress, set_progress] = useState<number>(0); // Progress percentage of current slide (0-100)
		const [canAnimate, set_canAnimate] = useState(false); // Controls if progress animation can start
		const [completedSlides, set_completedSlides] = useState<number[]>([]); // Tracks which slides are done
		const totalSlides = arrayLength || slideCount;
		const MOUNT_DELAY = 1500; // Delay before starting first animation

		/************************************************************************************************
		 * Animation Start Delay
		 * Delays the start of progress animation by MOUNT_DELAY milliseconds after component mount
		 * - Prevents animation from starting immediately when carousel loads
		 * - Gives user time to orient themselves before auto-advance begins
		 * - Sets canAnimate flag which controls progress bar animation
		 ************************************************************************************************/
		useTimeout(() => set_canAnimate(true), MOUNT_DELAY);

		/************************************************************************************************
		 * Progress Completion Effect
		 * Handles auto-advancing carousel when progress reaches 100%:
		 * - Scrolls to next slide
		 * - Marks current slide as completed
		 * - Resets progress for next slide
		 * Dependencies: Updates when progress, selectedIndex, or api changes
		 ************************************************************************************************/
		useEffect(() => {
			if (progress === 100) {
				api?.scrollNext();
				set_completedSlides(() => {
					// Mark all previous slides as complete when jumping forward
					const newCompletedSlides = [];
					//All previous slides must be set as completed
					for (let i = 0; i < selectedIndex; i++) {
						newCompletedSlides.push(i);
					}
					return newCompletedSlides;
				});
				set_progress(0);
			}
		}, [selectedIndex, completedSlides, progress, api]);

		/************************************************************************************************
		 * Slide Change Effect
		 * Updates completed slides and progress when selected slide index changes:
		 * - Marks all previous slides as completed when navigating to a new slide
		 * - Resets progress animation for the new slide
		 * - Ensures consistent state when jumping between slides
		 * Dependencies: Updates when selectedIndex changes
		 ************************************************************************************************/
		useEffect(() => {
			set_completedSlides(() => {
				// Mark all previous slides as complete when jumping forward
				const newCompletedSlides = [];
				//All previous slides must be set as completed
				for (let i = 0; i < selectedIndex; i++) {
					newCompletedSlides.push(i);
				}
				return newCompletedSlides;
			});
			set_progress(0);
		}, [selectedIndex]);

		/************************************************************************************************
		 * Handle Dot Click Event
		 * Manages carousel navigation when a dot indicator is clicked:
		 * - Resets progress animation for the new slide
		 * - Updates completed slides array based on navigation direction:
		 *   - Forward: Marks all previous slides as complete
		 *   - Backward: Removes completion status of skipped slides
		 * - Scrolls carousel to selected slide index
		 * - Early returns if carousel API is not available
		 ************************************************************************************************/
		const handleDotClick = (index: number): void => {
			if (!api) {
				return;
			}
			set_progress(0);
			set_completedSlides(prev => {
				if (index > selectedIndex) {
					// Mark all previous slides as complete when jumping forward
					const newCompletedSlides = [];
					//All previous slides must be set as completed
					for (let i = 0; i < index; i++) {
						newCompletedSlides.push(i);
					}
					return newCompletedSlides;
				}
				const newCompletedSlides = prev.filter(i => i < index);
				return newCompletedSlides;
			});
			api.scrollTo(index);
		};

		/************************************************************************************************
		 * Progress Animation Interval
		 * Updates progress bar animation for carousel dots:
		 * - Increments progress counter by 1 every 100ms when animation is enabled
		 * - Only runs when:
		 *   1. Animation is allowed (canAnimate is true)
		 *   2. Not on the last slide (selectedIndex !== totalSlides)
		 * - Progress updates trigger the Progress Completion Effect above
		 ************************************************************************************************/
		useInterval(() => set_progress(s => s + 1), canAnimate && selectedIndex !== totalSlides ? 100 : null);

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
									'transition-all duration-100 ease-linear'
								)}
								style={{
									width: completedSlides.includes(index)
										? '100%'
										: selectedIndex === index
										? `${progress}%`
										: '0%'
								}}
							/>
						</div>
					</div>
				))}
			</div>
		);
	}
);
CarouselDots.displayName = 'CarouselDots';

export const MobileCarouselDots = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & {arrayLength?: number}>(
	({className, arrayLength, ...props}, ref) => {
		const {api, selectedIndex} = useCarousel();
		const slideCount = api?.scrollSnapList().length || 0;
		const [progress, set_progress] = useState<number>(0); // Progress percentage of current slide (0-100)
		const [canAnimate, set_canAnimate] = useState(false); // Controls if progress animation can start
		const [completedSlides, set_completedSlides] = useState<number[]>([]); // Tracks which slides are done
		const totalSlides = arrayLength || slideCount;
		const MOUNT_DELAY = 1500; // Delay before starting first animation

		/************************************************************************************************
		 * Animation Start Delay
		 * Delays the start of progress animation by MOUNT_DELAY milliseconds after component mount
		 * - Prevents animation from starting immediately when carousel loads
		 * - Gives user time to orient themselves before auto-advance begins
		 * - Sets canAnimate flag which controls progress bar animation
		 ************************************************************************************************/
		useTimeout(() => set_canAnimate(true), MOUNT_DELAY);

		/************************************************************************************************
		 * Progress Completion Effect
		 * Handles auto-advancing carousel when progress reaches 100%:
		 * - Scrolls to next slide
		 * - Marks current slide as completed
		 * - Resets progress for next slide
		 * Dependencies: Updates when progress, selectedIndex, or api changes
		 ************************************************************************************************/
		useEffect(() => {
			if (progress === 100) {
				api?.scrollNext();
				set_completedSlides(() => {
					// Mark all previous slides as complete when jumping forward
					const newCompletedSlides = [];
					//All previous slides must be set as completed
					for (let i = 0; i < selectedIndex; i++) {
						newCompletedSlides.push(i);
					}
					return newCompletedSlides;
				});
				set_progress(0);
			}
		}, [selectedIndex, completedSlides, progress, api]);

		/************************************************************************************************
		 * Slide Change Effect
		 * Updates completed slides and progress when selected slide index changes:
		 * - Marks all previous slides as completed when navigating to a new slide
		 * - Resets progress animation for the new slide
		 * - Ensures consistent state when jumping between slides
		 * Dependencies: Updates when selectedIndex changes
		 ************************************************************************************************/
		useEffect(() => {
			set_completedSlides(() => {
				// Mark all previous slides as complete when jumping forward
				const newCompletedSlides = [];
				//All previous slides must be set as completed
				for (let i = 0; i < selectedIndex; i++) {
					newCompletedSlides.push(i);
				}
				return newCompletedSlides;
			});
			set_progress(0);
		}, [selectedIndex]);

		/************************************************************************************************
		 * Progress Animation Interval
		 * Updates progress bar animation for carousel dots:
		 * - Increments progress counter by 1 every 100ms when animation is enabled
		 * - Only runs when:
		 *   1. Animation is allowed (canAnimate is true)
		 *   2. Not on the last slide (selectedIndex !== totalSlides)
		 * - Progress updates trigger the Progress Completion Effect above
		 ************************************************************************************************/
		useInterval(() => set_progress(s => s + 1), canAnimate && selectedIndex !== totalSlides ? 100 : null);

		return (
			<div
				ref={ref}
				className={cl('flex justify-center z-[1000] gap-2 h-10 items-center', className)}
				{...props}>
				{Array.from({length: totalSlides}).map((_, index) => (
					<div
						key={index}
						className={'group -m-4 w-full cursor-pointer p-4'}>
						<div
							className={cl(
								'relative h-[4px] w-full',
								'rounded-full transition-all duration-100',
								'bg-[#ffffff1a]'
							)}>
							<div
								className={cl(
									'absolute top-0 left-0 rounded-[4px] h-full bg-white',
									'transition-all duration-100 ease-linear'
								)}
								style={{
									width: completedSlides.includes(index)
										? '100%'
										: selectedIndex === index
										? `${progress}%`
										: '0%'
								}}
							/>
						</div>
					</div>
				))}
			</div>
		);
	}
);
MobileCarouselDots.displayName = 'MobileCarouselDots';
