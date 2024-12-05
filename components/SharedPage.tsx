import {type ReactElement} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {PageBackgound} from './Backgrounds';
import DivaCardCard from './cards/profiles/Diva';
import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {cl} from './utils/tools';

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

function StatOwner({address, className}: {address: string; className?: string}): ReactElement {
	return (
		<div
			className={cl(
				'flex w-full justify-center md:text-lg lg:text-xl rounded-2xl bg-violet-light px-9 py-2 text-xl font-bold text-white',
				className
			)}>
			<span>{`${address.slice(0, 7)}...${address.slice(address.length - 7, address.length - 1)}`}</span>
			&nbsp;
			<span className={'uppercase'}>{' stats:'}</span>
		</div>
	);
}

export function SharedPage({profile}: {profile: string}): ReactElement {
	return (
		<div className={'flex justify-between gap-10 bg-violet-dark p-6 md:h-screen md:w-screen'}>
			<div
				className={
					'flex size-full flex-col items-center justify-center p-[4%] md:w-2/5 md:items-baseline lg:p-32'
				}>
				<IconJumperLogo className={'min-h-10'} />
				<div className={'mb-10 mt-4 w-full'}>
					<Image
						src={'/logo.png'}
						alt={'Wrapped'}
						width={460}
						height={320}
					/>
				</div>

				<StatOwner
					address={profile}
					className={'mb-6'}
				/>
				<div className={'mb-6 flex w-full flex-col items-center md:hidden'}>
					<DivaCardCard
						width={300}
						tokens={['Wrapped', 'Wrapped', 'Wrapped']}
						topRatio={0.5}
					/>
				</div>

				<div className={'flex w-full flex-col justify-between gap-2'}>
					{stats.map((stat, index) => (
						<div
							key={index}
							className={'flex justify-between gap-2 text-xl font-medium leading-[24px]'}>
							<p className={'font-medium text-white'}>
								{stat.title}
								{':'}
							</p>
							<p className={'font-medium text-white'}>{stat.value}</p>
						</div>
					))}
				</div>

				<div className={'mt-10 flex w-full flex-col gap-4'}>
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

			<div className={'relative hidden size-full w-3/5 justify-between overflow-hidden rounded-[64px] md:flex'}>
				<PageBackgound
					position={'bottom-right'}
					showFrame={false}
					className={'!left-[12%] !top-[52%]'}
				/>
				<div className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
					<div className={'md:hidden lg:block'}>
						<DivaCardCard
							width={440}
							tokens={['Wrapped', 'Wrapped', 'Wrapped']}
							topRatio={0.5}
						/>
					</div>
					<div className={'lg:hidden'}>
						<DivaCardCard
							width={350}
							tokens={['Wrapped', 'Wrapped', 'Wrapped']}
							topRatio={0.5}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
