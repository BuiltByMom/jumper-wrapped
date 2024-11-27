import {type ReactElement, useState} from 'react';
import Link from 'next/link';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {GreetingsBackground} from './MainPageBackgound';
import {WalletSelector} from './WalletSelector';
import {Button} from './common/Button';
import {Header} from './common/Header';
import {IconJumperLogo} from './icons/IconJumperLogo';

export function HomePage(): ReactElement {
	const account = useWallet();
	const {isConnected, address} = useAccount();
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);

	return (
		<div className={'flex h-screen w-full items-center justify-center bg-violet-light'}>
			<Header set_isWalletSelectorOpen={set_isWalletSelectorOpen} />
			<GreetingsBackground />
			<div className={'z-40 flex size-[560px] flex-col items-center justify-center rounded-full bg-violet-dark'}>
				<IconJumperLogo />
				<p className={'mb-20 text-[108px] uppercase text-white'}>{'Wrapped'}</p>
				<p className={'mb-6 max-w-[320px] text-center text-base font-medium text-white'}>
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
			{/* <div className={'absolute size-full p-[100px]'}>
				<iframe
					style={{width: '100%', height: '100%'}}
					src={'https://app.endlesstools.io/embed/490a1d01-a105-4c52-a329-3cfe9f77487e'}
					allow={'clipboard-write; encrypted-media; gyroscope; web-share'}
					referrerPolicy={'strict-origin-when-cross-origin'}
					allowFullScreen
				/>
			</div> */}
			<WalletSelector
				isOpen={isWalletSelectorOpen}
				onClose={() => set_isWalletSelectorOpen(false)}
			/>
		</div>
	);
}
