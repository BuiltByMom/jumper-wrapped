import {type ReactElement, useCallback} from 'react';

import {cl} from '../utils/tools';
import {Button} from './Button';

const domain = 'https://jumper-wrap.builtby.dad';

export function StatCard({
	stat,
	isShareCard,
	profile
}: {
	stat: {name: string; description: string};
	isShareCard?: boolean;
	profile?: string;
}): ReactElement {
	const clickToTweet = useCallback(async () => {
		window.open(
			`https://twitter.com/intent/tweet?url=${domain}/${profile}?text=Check out my wrapped Jumper!`,
			'_blank'
		);
	}, [profile]);

	return isShareCard ? (
		<div className={'relative z-40 rounded-[32px] md:scale-90 lg:scale-110'}>
			<div
				className={cl(
					'flex h-[600px] w-[440px] items-center justify-center',
					'overflow-hidden rounded-[32px] border-4 border-accent',
					'bg-black bg-gradient-to-b from-[#9700F4] to-[#3238C9]',
					'p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
				)}>
				<p className={'text-3xl font-bold uppercase text-white'}>{stat.name}</p>
			</div>
			<Button
				onClick={clickToTweet}
				className={cl(
					'absolute bottom-[-25px] left-1/2 -translate-x-1/2',
					'xl:bottom-[-32px] xl:!w-[320px] z-50 '
				)}>
				<p className={'text-2xl font-bold uppercase text-black xl:text-3xl'}>{'Share on X'}</p>
			</Button>
		</div>
	) : (
		<div className={'relative z-40 scale-90 overflow-hidden md:scale-75 lg:scale-110'}>
			<div
				className={cl(
					'flex h-[600px] w-[440px] items-center justify-center',
					'overflow-hidden rounded-[32px] border-4 border-[#B999FF]',
					'bg-gradient-to-b from-[#D1F3C0] to-[#32C968]',
					'p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
				)}>
				<p className={'text-3xl font-bold uppercase text-black'}>{stat.name}</p>
			</div>
		</div>
	);
}
