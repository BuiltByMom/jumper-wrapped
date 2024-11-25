import {Fragment} from 'react';
import {Dialog, DialogPanel, Transition, TransitionChild} from '@headlessui/react';
import {useConnectModal} from '@rainbow-me/rainbowkit';
import {useWalletModal} from '@solana/wallet-adapter-react-ui';

import {SelectorItem} from './common/SelectorItem';
import {IconClose} from './icons/IconClose';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

type TWalletSelectorProps = {
	isOpen: boolean;
	onClose: () => void;
};

export function WalletSelector({isOpen, onClose}: TWalletSelectorProps): ReactElement {
	const {openConnectModal} = useConnectModal();

	const {setVisible: set_visible} = useWalletModal();

	return (
		<Transition
			show={isOpen}
			as={Fragment}>
			<Dialog
				as={'div'}
				className={'relative z-[1000]'}
				onClose={onClose}>
				<TransitionChild
					as={Fragment}
					enter={'ease-out duration-300'}
					enterFrom={'opacity-0'}
					enterTo={'opacity-100'}
					leave={'ease-in duration-200'}
					leaveFrom={'opacity-100'}
					leaveTo={'opacity-0'}>
					<div className={'fixed inset-0 bg-[#1B1036CC] backdrop-blur transition-opacity'} />
				</TransitionChild>

				<div className={'fixed inset-0 z-[1001] overflow-y-auto'}>
					<div
						className={
							'flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'
						}>
						<TransitionChild
							as={Fragment}
							enter={'ease-out duration-300'}
							enterFrom={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
							enterTo={'opacity-100 translate-y-0 sm:scale-100'}
							leave={'ease-in duration-200'}
							leaveFrom={'opacity-100 translate-y-0 sm:scale-100'}
							leaveTo={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}>
							<DialogPanel
								className={cl(
									'relative overflow-hidden flex',
									'flex-col items-center justify-center',
									'!p-10 transition-all rounded-2xl'
								)}>
								<div className={'rounded-2xl'}>
									<div className={'flex w-full items-center justify-between bg-black px-6 py-5'}>
										<p className={'font-space-grotesk text-xl leading-6 text-white'}>
											{'Connect a wallet to continue'}
										</p>
										<button onClick={onClose}>
											<IconClose className={'text-white'} />
										</button>
									</div>
									<SelectorItem
										title={'Solana wallet'}
										onClick={() => {
											onClose();
											set_visible(true);
										}}
									/>
									<SelectorItem
										title={'evm wallet'}
										onClick={() => {
											onClose();
											openConnectModal?.();
										}}
									/>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
