import {type ReactElement} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {PageBackgound} from './Backgrounds';
import {Button} from './common/Button';
import {StatCard} from './common/StatCard';
import {IconJumperLogo} from './icons/IconJumperLogo';

const stats = [
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	},
	{
		title: 'Stat',
		value: '2%'
	}
];

export function SharedPage({profile}: {profile: string}): ReactElement {
	return (
		<div className={'flex h-screen w-screen justify-between gap-10 bg-violet-dark p-10'}>
			<div className={'flex h-full w-2/5 flex-col justify-center p-32'}>
				<IconJumperLogo className={'min-h-10'} />
				<div className={'mb-10 mt-4 w-[252px] md:w-[400px]'}>
					<Image
						src={'/logo.png'}
						alt={'Wrapped'}
						width={460}
						height={320}
						className={'xl:w-[660px]'}
					/>
				</div>

				<div className={'flex flex-col gap-2'}>
					{stats.map((stat, index) => (
						<div
							key={index}
							className={'flex justify-between gap-2 text-xl font-medium leading-[24px]'}>
							<p className={'text-base  font-medium text-white'}>
								{stat.title}
								{':'}
							</p>
							<p className={'text-base font-medium text-white'}>{stat.value}</p>
						</div>
					))}
				</div>

				<div className={'mt-10 flex flex-col gap-4'}>
					<Link href={'/'}>
						<Button
							className={'!w-full'}
							title={'Wrap your year'}
						/>
					</Link>
					<Link href={'https://jumper.exchange/'}>
						<Button className={'!w-full !bg-accent-hover hover:!bg-accent'}>
							<IconJumperLogo />
						</Button>
					</Link>
				</div>
			</div>

			<div className={'relative size-full w-3/5 justify-between overflow-hidden rounded-[64px]'}>
				<PageBackgound
					position={'bottom-right'}
					showFrame={false}
					className={'!left-[12%] !top-[52%]'}
				/>
				<div className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
					<StatCard
						profile={profile}
						stat={{name: 'Wrapped', description: '100'}}
						isShareCard={false}
					/>
				</div>
			</div>
		</div>
	);
}
