import Image from 'next/image';
import Link from 'next/link';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

export function WrappedButton({
	set_isWalletSelectorOpen
}: {
	set_isWalletSelectorOpen: (value: boolean) => void;
}): ReactElement {
	const account = useWallet();
	const {isConnected, address} = useAccount();
	return (
		<div
			className={cl(
				'z-50 flex size-[560px] flex-col items-center justify-center rounded-full',
				'border-4 border-accent bg-violet-dark',
				'transition-all duration-[700ms] ease-in-out',
				'shadow-[0px_0px_100px_30px_#33FFEE]',
				'hover:shadow-[0px_0px_180px_60px_#33FFEE]'
			)}>
			<div className={'mt-[70px] flex flex-col items-center'}>
				<IconJumperLogo />
				<Image
					src={'/logo.png'}
					alt={'Wrapped'}
					width={460}
					height={320}
				/>
				<p className={'mb-6 mt-20 max-w-[320px] text-center text-base font-medium text-white'}>
					{"Let's get into your jumper wrapped and find out what defi degen you are…"}
				</p>
				{account.connected || isConnected ? (
					<Link href={account.connected ? `/${account.publicKey?.toBase58()}` : `/${address}`}>
						<Button title={'Start'} />
					</Link>
				) : (
					<Button
						onClick={() => set_isWalletSelectorOpen(true)}
						title={'Connect wallet'}
					/>
				)}
			</div>
		</div>
	);
}
