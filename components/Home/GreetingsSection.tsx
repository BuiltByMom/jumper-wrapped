import {motion} from 'framer-motion';

import {WalletSelector} from '../WalletSelector';
import {WrappedButton} from '../WrappedButton';
import {greetingsAnimation} from './animations';

import type {ReactElement} from 'react';
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
	return (
		<motion.div
			key={'greetings-section'}
			variants={greetingsAnimation}
			initial={'initial'}
			animate={'animate'}
			exit={'exit'}>
			<WrappedButton
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
				onStart={() => set_view('carousel')}
			/>
			<WalletSelector
				isOpen={isWalletSelectorOpen}
				onClose={() => set_isWalletSelectorOpen(false)}
			/>
		</motion.div>
	);
}
