import Image from 'next/image';
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

export function WrappedButton({set_isWalletSelectorOpen, onStart}: TProps): ReactElement {
	const account = useWallet();
	const {isConnected} = useAccount();

	const handleClick = (): void => {
		set_isWalletSelectorOpen(true);
	};

	return (
		<div
			className={cl(
				'z-50 flex size-[560px] flex-col items-center justify-center rounded-full',
				'border-4 border-accent bg-violet-dark xl:size-[840px]',
				'transition-all duration-[700ms] ease-in-out',
				'shadow-[0px_0px_100px_30px_#33FFEE] xl:shadow-[0px_0px_180px_60px_#33FFEE]',
				'hover:shadow-[0px_0px_180px_60px_#33FFEE] xl:hover:shadow-[0px_0px_240px_90px_#33FFEE]'
			)}>
			<div className={'mt-[70px] flex flex-col items-center'}>
				<IconJumperLogo className={'xl:mb-6 xl:h-[120px] xl:w-[320px]'} />
				<Image
					src={'/logo.png'}
					alt={'Wrapped'}
					width={460}
					height={320}
					className={'xl:w-[660px]'}
				/>
				<p
					className={
						'mb-6 mt-20 max-w-[320px] text-center text-base font-medium text-white xl:mb-16 xl:max-w-[570px] xl:text-3xl'
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
