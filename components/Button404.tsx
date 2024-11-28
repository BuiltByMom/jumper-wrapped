import Image from 'next/image';
import Link from 'next/link';

import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

import type {ReactElement} from 'react';

export function Button404(): ReactElement {
	return (
		<div
			className={cl(
				'z-50 flex size-[560px] flex-col items-center justify-center rounded-full',
				'border-4 border-accent bg-violet-dark xl:size-[840px]',
				'transition-all duration-[700ms] ease-in-out',
				'shadow-[0px_0px_100px_30px_#33FFEE] xl:shadow-[0px_0px_180px_60px_#33FFEE]',
				'hover:shadow-[0px_0px_180px_60px_#33FFEE] xl:hover:shadow-[0px_0px_240px_90px_#33FFEE]'
			)}>
			<Image
				src={'/404.png'}
				alt={'404'}
				className={'mb-14'}
				width={300}
				height={120}
			/>
			<Link
				href={'/'}
				className={'mb-4'}>
				<Button title={'Wrap your year'} />
			</Link>
			<Link href={'https://jumper.exchange/'}>
				<Button className={'!bg-accent-hover hover:!bg-accent'}>
					<IconJumperLogo />
				</Button>
			</Link>
		</div>
	);
}
