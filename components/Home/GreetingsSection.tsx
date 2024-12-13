import {type ReactElement, useCallback} from 'react';
import {motion} from 'motion/react';
import {useAccount} from 'wagmi';

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
export function GreetingsSection({set_isWalletSelectorOpen, set_view}: THomeProps): ReactElement {
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
			id={'primary-section-greetings'}
			{...greetingsAnimation}>
			<WrappedButton
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				onStart={postOnStartMessage}
			/>
		</motion.div>
	);
}
