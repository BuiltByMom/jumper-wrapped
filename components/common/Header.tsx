import {type ReactElement} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useWallet} from '@solana/wallet-adapter-react';
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui';

import {CarouselDots} from '../carouselContext';
import {IconJumperLogo} from '../icons/IconJumperLogo';
import {IconJumperSmall} from '../icons/IconJumperSmall';

export function Header({
	set_isWalletSelectorOpen,
	isCarouselView
}: {
	set_isWalletSelectorOpen: (value: boolean) => void;
	isCarouselView?: boolean;
}): ReactElement {
	const account = useWallet();
	const {isConnected} = useAccount();
	const router = useRouter();

	return (
		<div
			className={
				'absolute left-0 top-0 z-20 flex w-full items-center justify-between p-6 md:bg-violet-light xl:p-16'
			}>
			<Link
				href={'https://jumper.exchange'}
				target={'_blank'}>
				<div className={'hidden md:block'}>
					<IconJumperLogo className={'xl:h-[64px] xl:w-[320px]'} />
				</div>
				<div className={'block md:hidden'}>
					<IconJumperSmall className={'text-white'} />
				</div>
			</Link>
			{router.pathname !== '/404' && isCarouselView && (
				<CarouselDots
					className={'!static'}
					arrayLength={6}
				/>
			)}

			{account.connected ? (
				<div
					className={
						'flex h-[48px] w-[200px] justify-center rounded-[32px] bg-[#ffffff1a] !font-bold uppercase hover:bg-[#FFFFFF33] xl:h-[64px] xl:w-[320px]'
					}>
					<WalletMultiButton
						style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
						className={'!xl:text-2xl !bg-transparent'}
					/>
				</div>
			) : isConnected ? (
				<ConnectButton.Custom>
					{({account, openAccountModal, chain}) => (
						<button
							className={
								'flex h-[48px] w-[200px] items-center justify-center gap-4 rounded-[32px] bg-[#ffffff1a] font-bold text-white hover:bg-[#FFFFFF33] xl:h-[64px] xl:w-[320px]'
							}
							onClick={openAccountModal}
							type={'button'}>
							{chain?.iconUrl && (
								<Image
									alt={chain.iconBackground ?? 'Chain icon'}
									src={chain.iconUrl}
									unoptimized
									width={32}
									height={32}
								/>
							)}
							<p>{account?.displayName}</p>
						</button>
					)}
				</ConnectButton.Custom>
			) : (
				<button
					className={
						'h-[48px] w-[200px] rounded-[32px] bg-[#ffffff1a] !font-bold uppercase hover:bg-[#FFFFFF33] xl:h-[64px] xl:w-[320px]'
					}
					onClick={() => set_isWalletSelectorOpen(true)}>
					<p className={'text-base font-bold uppercase text-white xl:text-2xl'}>{'Connect wallet'}</p>
				</button>
			)}
		</div>
	);
}
