import {type ReactElement} from 'react';
import Image from 'next/image';
import {useAccount} from 'wagmi';
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {useWallet} from '@solana/wallet-adapter-react';
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui';

import {IconJumperLogo} from '../icons/IconJumperLogo';

export function Header({set_isWalletSelectorOpen}: {set_isWalletSelectorOpen: (value: boolean) => void}): ReactElement {
	const account = useWallet();
	const {isConnected} = useAccount();

	return (
		<div className={'absolute left-0 top-0 z-20 flex w-full items-center justify-between p-6'}>
			<IconJumperLogo />

			{account.connected ? (
				<div
					className={
						'flex h-[48px] w-[200px] justify-center rounded-[32px] bg-[#ffffff1a] !font-bold uppercase hover:bg-[#FFFFFF33]'
					}>
					<WalletMultiButton
						style={{}}
						className={'!bg-transparent'}
					/>
				</div>
			) : isConnected ? (
				<ConnectButton.Custom>
					{({account, openAccountModal, chain}) => (
						<button
							className={
								'flex h-[48px] w-[200px] items-center justify-center gap-4 rounded-[32px] bg-[#ffffff1a] font-bold text-white hover:bg-[#FFFFFF33]'
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
						'h-[48px] w-[200px] rounded-[32px] bg-[#ffffff1a] !font-bold uppercase hover:bg-[#FFFFFF33]'
					}
					onClick={() => set_isWalletSelectorOpen(true)}>
					<p className={'!text-base font-bold uppercase text-white'}>{'Connect wallet'}</p>
				</button>
			)}
		</div>
	);
}
