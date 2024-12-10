import Link from 'next/link';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

export function NextYearButton(): ReactElement {
	return (
		<div className={'relative'}>
			<div
				className={cl(
					'z-50 flex size-[311px] md:size-[560px] flex-col items-center justify-center rounded-full',
					'border-4 relative border-accent bg-violet-dark xl:size-[840px]',
					'transition-all duration-[700ms] ease-in-out',
					'shadow-[0px_0px_100px_30px_#33FFEE] xl:shadow-[0px_0px_180px_60px_#33FFEE]',
					'hover:shadow-[0px_0px_180px_60px_#33FFEE] xl:hover:shadow-[0px_0px_240px_90px_#33FFEE]'
				)}>
				<div
					className={
						'flex flex-col items-center justify-center text-center text-2xl font-bold uppercase text-white md:mb-6 md:max-w-[320px] '
					}>
					<p>{'Weird'}</p>
					<p>{'U better use Jumper next year'}</p>
				</div>
				<Link
					href={'https://jumper.exchange/'}
					className={'absolute left-1/2 top-80 z-50 mt-10 hidden -translate-x-1/2 flex-col md:flex'}>
					<Button className={'!w-full !bg-accent-hover !px-12 hover:!bg-accent'}>
						<IconJumperLogo />
					</Button>
				</Link>
			</div>

			<Link
				href={'https://jumper.exchange/'}
				className={'absolute left-1/2 top-80 z-50 mt-10 flex -translate-x-1/2 flex-col md:hidden'}>
				<Button className={'!w-full !bg-accent-hover !px-12 hover:!bg-accent'}>
					<IconJumperLogo />
				</Button>
			</Link>
		</div>
	);
}
