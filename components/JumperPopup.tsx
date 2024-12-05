import Link from 'next/link';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

export function JumperPopup(): ReactElement {
	return (
		<div
			className={cl(
				'absolute md:bottom-[99px] z-[1005] group max-sm:gap-2 left-1/2 -translate-x-1/2 md:left-auto',
				'md:-translate-x-0 bottom-2 md:right-10 flex md:w-[300px] md:size-60 flex-col',
				'justify-between rounded-[24px] border border-[#FFFFFF1A]',
				'p-4 backdrop-blur [box-shadow:0px_0px_80px_0px_#FFFFFF33_inset]',
				'hover:[box-shadow:0px_0px_80px_0px_#6120FD] hover:border-[#FFFFFF66]'
			)}>
			<div className={'flex justify-between'}>
				<span className={'text-xl font-bold text-white'}>{'Anon'}</span>
				<IconJumperLogo />
			</div>
			<p className={'font-semibold text-white'}>
				{'You ranked in the top 5% of all Jumper Chads. May your 2025 be just as bullish. WAGMI'}
			</p>
			<Link
				href={'https://jumper.exchange'}
				target={'_blank'}>
				<Button className={'!bg-white group-hover:!bg-accent-hover'}>
					<p className={'font-bold uppercase'}>{'Go to jumper'}</p>
				</Button>
			</Link>
		</div>
	);
}
