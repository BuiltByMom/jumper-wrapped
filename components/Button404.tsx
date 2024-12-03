import Image from 'next/image';
import Link from 'next/link';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

export function Button404(): ReactElement {
	return (
		<div className={'relative'}>
			<div
				className={cl(
					'z-50 md:mt-0 flex size-[311px] md:size-[560px] flex-col items-center justify-center rounded-full',
					'border-4 border-accent bg-violet-dark xl:size-[840px]',
					'transition-all duration-[700ms] ease-in-out',
					'shadow-[0px_0px_100px_30px_#33FFEE] xl:shadow-[0px_0px_180px_60px_#33FFEE]',
					'hover:shadow-[0px_0px_180px_60px_#33FFEE] xl:hover:shadow-[0px_0px_240px_90px_#33FFEE]'
				)}>
				<div className={'max-w-[252px] md:max-w-none'}>
					<Image
						src={'/404.png'}
						alt={'404'}
						className={'md:mb-14'}
						width={300}
						height={120}
					/>
				</div>
				<div className={'hidden flex-col items-center gap-4 md:flex'}>
					<Link href={'/'}>
						<Button title={'Wrap your year'} />
					</Link>
					<Link href={'https://jumper.exchange/'}>
						<Button className={'!bg-accent-hover hover:!bg-accent'}>
							<IconJumperLogo />
						</Button>
					</Link>
				</div>
			</div>
			<div className={'absolute left-1/2 top-80 z-50 mt-10 flex -translate-x-1/2 flex-col gap-4 md:hidden'}>
				<Link href={'/'}>
					<Button title={'Wrap your year'} />
				</Link>
				<Link href={'https://jumper.exchange/'}>
					<Button className={'!bg-accent-hover hover:!bg-accent'}>
						<IconJumperLogo />
					</Button>
				</Link>
			</div>
		</div>
	);
}
