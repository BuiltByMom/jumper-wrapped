import {type ReactElement, useState} from 'react';

import {GreetingsBackground} from './Backgrounds';
import {WalletSelector} from './WalletSelector';
import {WrappedButton} from './WrappedButton';
import {Header} from './common/Header';

function GreetingsView({
	isWalletSelectorOpen,
	set_isWalletSelectorOpen
}: {
	isWalletSelectorOpen: boolean;
	set_isWalletSelectorOpen: (value: boolean) => void;
}): ReactElement {
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

export function HomePage(): ReactElement {
	const [isWalletSelectorOpen, set_isWalletSelectorOpen] = useState(false);

	return (
		<>
			<GreetingsView
				isWalletSelectorOpen={isWalletSelectorOpen}
				set_isWalletSelectorOpen={set_isWalletSelectorOpen}
			/>
		</>
	);
}
