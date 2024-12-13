import {type ReactElement, type ReactNode, useMemo} from 'react';
import Link from 'next/link';
import {motion} from 'motion/react';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {ShareButton} from '@/components/Carousel/ShareButton';
import {useCarousel} from '@/components/carouselContext';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Card Animation Configuration
 * Defines shared animations for both profile and stat cards
 * Features:
 * - Scale and fade entrance
 * - Spring physics for natural feel
 * - Staggered children animations
 ************************************************************************************************/
const cardAnimation = {
	initial: {opacity: 0, scale: 0, z: 1},
	animate: {
		opacity: 1,
		scale: 1,
		z: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 5,
			mass: 0.8,
			opacity: {duration: 0.4, delay: 0.4}
		}
	},
	exit: {
		opacity: 0,
		scale: 0,
		z: 1
	}
};

/************************************************************************************************
 * Profile Card Component
 * Base card component for profile-related displays
 * Features:
 * - Responsive scaling
 * - Entrance animations
 * - Consistent styling
 * - Celebration effects
 ************************************************************************************************/
export type TCardProps = {
	children: ReactNode;
	width: number;
	className?: string;
	disableAnimation?: boolean;
	noShare?: boolean;
};

export default function Card(props: TCardProps): ReactElement {
	const {canScrollNext, api} = useCarousel();
	const {width} = props;
	const account = useWallet();
	const {address} = useAccount();
	const profile = useMemo(() => account.publicKey?.toString() || address, [account, address]);

	return (
		<motion.div
			variants={cardAnimation}
			initial={'initial'}
			animate={!api || !canScrollNext || props.disableAnimation ? 'animate' : 'exit'}
			exit={'exit'}
			className={'relative w-fit pb-0 md:pb-10'}>
			<div
				style={{transform: `scale(${width / 440})`}}
				className={cl(
					'w-[440px] relative flex aspect-[440/600]',
					'origin-top',
					'border-collapse',
					props.className
				)}>
				{props.children}
				{!props.noShare && <ShareButton profile={profile} />}
				{!props.noShare && (
					<Link
						href={
							'https://lifi.notion.site/How-to-Share-Your-Jumper-Wrapped-on-X-15bf0ff14ac78050a00be3a9505e80c0?pvs=4'
						}
						target={'_blank'}
						className={
							'absolute -bottom-16 left-1/2 z-50 -translate-x-1/2 text-accent underline transition-colors hover:text-white'
						}>
						{'How to share?'}
					</Link>
				)}
			</div>
		</motion.div>
	);
}
