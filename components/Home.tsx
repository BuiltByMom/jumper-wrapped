import {type ReactElement, useState} from 'react';

import {GreetingsBackground} from './Backgrounds';
import {WalletSelector} from './WalletSelector';
import {WrappedButton} from './WrappedButton';
import {Header} from './common/Header';

export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);

	return (
		<div className={'flex h-screen w-full items-center justify-center bg-violet-light'}>
			<Header set_isWalletSelectorOpen={set_isWalletSelectorOpen} />
			<GreetingsBackground />
			<WrappedButton set_isWalletSelectorOpen={set_isWalletSelectorOpen} />
			<WalletSelector
				isOpen={isWalletSelectorOpen}
				onClose={() => set_isWalletSelectorOpen(false)}
			/>
		</div>
	);
}
