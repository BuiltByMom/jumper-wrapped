import {type ReactElement} from 'react';

import {PageBackgound} from '@/components/Backgrounds';
import {Button404} from '@/components/Button404';
import {Header} from '@/components/common/Header';

export default function Page404(): ReactElement {
	return (
		<div className={'flex h-screen w-full items-center justify-center bg-violet-light'}>
			<PageBackgound position={'center'} />
			<Header
				set_isWalletSelectorOpen={() => {}}
				cardsAmount={0}
			/>
			<Button404 />
		</div>
	);
}
