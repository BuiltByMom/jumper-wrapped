import {type ReactElement, useCallback} from 'react';
import {useAccount} from 'wagmi';
import {motion} from 'framer-motion';

import {WalletSelector} from '../WalletSelector';
import {WrappedButton} from '../WrappedButton';
import {greetingsAnimation} from './animations';

import type {THomeProps} from './types';

/************************************************************************************************
 * Greetings Section Component
 * Initial view shown to users before connecting wallet
 * Features:
 * - Wallet connection button
 * - Welcome animations
 * - Wallet selector modal
 ************************************************************************************************/
export function GreetingsSection({set_isWalletSelectorOpen, isWalletSelectorOpen, set_view}: THomeProps): ReactElement {
	const {address} = useAccount();

	const postOnStartMessage = useCallback(() => {
		try {
			fetch(`https://jumper-wash.builtby.dad/user/${address}`, {
				method: 'POST'
			});
		} catch (error) {
			console.error(error);
		}
		set_view('carousel');
	}, [address, set_view]);

	return (
		<motion.div
			key={'greetings-section'}
			id={'primary-section'}
			variants={greetingsAnimation}
			initial={'initial'}
			animate={'animate'}
			exit={'exit'}>
			<WrappedButton
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				onStart={postOnStartMessage}
			/>
			<WalletSelector
				isOpen={isWalletSelectorOpen}
				onClose={() => set_isWalletSelectorOpen(false)}
			/>
		</motion.div>
	);
}
