import Image from 'next/image';
import {motion} from 'motion/react';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

type TProps = {
	set_isWalletSelectorOpen: (value: boolean) => void;
	onStart: () => void;
};

const breathingAnimation = {
	animate: {
		opacity: 1,
		scale: [1, 1.02, 1],
		z: 1,
		transition: {
			duration: 3,
			scale: {
				repeat: Infinity,
				repeatType: 'reverse',
				ease: 'easeInOut',
				duration: 3
			}
		}
	},
	exit: {opacity: 0, scale: 0, z: 1}
};

export function WrappedButton({set_isWalletSelectorOpen, onStart}: TProps): ReactElement {
	const account = useWallet();
	const {isConnected} = useAccount();

	const handleClick = (): void => {
		set_isWalletSelectorOpen(true);
	};

	return (
		<div className={'relative'}>
			<motion.div
				variants={breathingAnimation}
				animate={'animate'}
				exit={'exit'}>
				<div
					className={cl(
						'z-50 flex size-[311px] md:size-[560px] flex-col items-center justify-center rounded-full',
						'-mt-[50%] md:mt-0',
						'border-4 relative border-accent bg-violet-dark xl:size-[840px]',
						'transition-all duration-[700ms] ease-in-out',
						'shadow-[0px_0px_100px_30px_#33FFEE] xl:shadow-[0px_0px_180px_60px_#33FFEE]',
						'hover:shadow-[0px_0px_180px_60px_#33FFEE] xl:hover:shadow-[0px_0px_240px_90px_#33FFEE]'
					)}>
					<div className={'flex flex-col items-center md:mt-[70px]'}>
						<IconJumperLogo className={'mb-2 w-40 md:mb-4 xl:mb-8 xl:h-[120px] xl:w-[320px]'} />
						<div className={'w-[252px] md:w-[464px]'}>
							<Image
								src={'/logo.png'}
								alt={'Wrapped'}
								width={460}
								height={320}
								className={'xl:w-[660px]'}
							/>
						</div>
						<p
							className={
								'mb-6 mt-20 hidden max-w-[320px] text-center text-base font-medium text-white md:block xl:mb-16 xl:max-w-[570px] xl:text-3xl'
							}>
							{"Let's get into your jumper wrapped and find out what defi degen you are…"}
						</p>
						<div className={'hidden md:block'}>
							{account.connected || isConnected ? (
								<Button
									onClick={onStart}
									title={'Start'}
								/>
							) : (
								<Button
									onClick={handleClick}
									title={'Connect wallet'}
								/>
							)}
						</div>
					</div>
				</div>
			</motion.div>
			<div className={'absolute left-1/2 top-80 z-50 mt-10 -translate-x-1/2 md:hidden'}>
				<p
					className={
						'mb-6 max-w-[320px] text-center text-base font-medium text-white xl:mb-16 xl:max-w-[570px] xl:text-3xl'
					}>
					{"Let's get into your jumper wrapped and find out what defi degen you are…"}
				</p>
				{account.connected || isConnected ? (
					<Button
						onClick={onStart}
						title={'Start'}
					/>
				) : (
					<Button
						onClick={handleClick}
						title={'Connect wallet'}
					/>
				)}
			</div>
		</div>
	);
}
