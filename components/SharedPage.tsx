import {type ReactElement, useEffect, useMemo, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {PageBackground} from './Backgrounds';
import {ProfileByID} from './Carousel';
import {Button} from './common/Button';
import {IconJumperLogo} from './icons/IconJumperLogo';
import {fetchUserProfile} from './utils/cards';
import {cl} from './utils/tools';

import type {TUserProfile} from './utils/cards';

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

export function SharedPage({address}: {address: string}): ReactElement {
	const [profile, set_profile] = useState<TUserProfile | null>(null);

	useEffect(() => {
		if (address) {
			fetchUserProfile(address).then(profile => {
				set_profile(profile);
			});
		}
	}, [address]);

	const prepareStats = useMemo((): {key: string; value: string | number}[] => {
		const statsToUse: {key: string; value: string | number}[] = [];
		if (!profile) {
			return statsToUse;
		}

		const detectedProfile = profile.profileName || 'Noob';
		if (!detectedProfile || detectedProfile === null || detectedProfile === 'Noob') {
			statsToUse.push({
				key: 'Swap Volume',
				value: `$${Number(profile.swapVolume).toFixed(0)}`
			});
			if (profile.numberOfChains === 0) {
				statsToUse.push({key: 'Chains Explored', value: '1'});
			} else {
				statsToUse.push({key: 'Chains Explored', value: profile.numberOfChains});
			}

			if (address.startsWith('0x') && address.length === 42) {
				if (profile.favoriteChain) {
					const capitalizedChain =
						profile.favoriteChain.charAt(0).toUpperCase() + profile.favoriteChain.slice(1);
					statsToUse.push({key: 'Favorite Chain', value: capitalizedChain});
				}
			} else {
				statsToUse.push({key: 'Favorite Chain', value: 'Solana'});
			}
		} else {
			if (Number(profile.bridgeVolume) > 0) {
				statsToUse.push({
					key: 'Bridge Volume',
					value: `$${Number(profile.bridgeVolume).toFixed(0)}`
				});
			} else {
				statsToUse.push({
					key: 'Bridge Rank',
					value: `Top ${
						Number(profile.bridgeVolumeRank) < 0.001
							? '0.1'
							: (Number(profile.bridgeVolumeRank) * 100).toFixed(0)
					}%`
				});
			}

			if (Number(profile.swapVolume) > 0) {
				statsToUse.push({
					key: 'Swap Volume',
					value: `$${Number(profile.swapVolume).toFixed(0)}`
				});
			} else {
				statsToUse.push({
					key: 'Swap Rank',
					value: `Top ${
						Number(profile.swapVolumeRank) < 0.001
							? '0.1'
							: (Number(profile.swapVolumeRank) * 100).toFixed(0)
					}%`
				});
			}

			if (profile.numberOfChains === 0) {
				statsToUse.push({key: 'Chains Explored', value: '1'});
			} else {
				statsToUse.push({key: 'Chains Explored', value: profile.numberOfChains});
			}

			if (detectedProfile === 'Solana Soldier') {
				statsToUse.push({key: 'Favorite Chain', value: 'Solana'});
			} else {
				if (profile.favoriteChain) {
					const capitalizedChain =
						profile.favoriteChain.charAt(0).toUpperCase() + profile.favoriteChain.slice(1);
					statsToUse.push({key: 'Favorite Chain', value: capitalizedChain});
				}
			}
		}

		return statsToUse;
	}, [address, profile]);

	return (
		<div className={'flex justify-between gap-10 bg-violet-dark p-6 md:h-dvh md:w-screen'}>
			<div
				className={cl(
					'flex size-full flex-col items-center justify-center p-[4%] md:w-2/5 md:items-baseline lg:p-32'
				)}>
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
					address={address}
					className={'mb-6'}
				/>
				<div className={'-mb-36 flex w-full flex-col items-center md:mb-6 md:hidden'}>
					<ProfileByID
						profile={profile}
						noShare
						size={300}
						disableAnimation
					/>
				</div>

				<div className={'flex w-full flex-col justify-between gap-2'}>
					{prepareStats.map((stat, index) => (
						<div
							key={index}
							className={'flex justify-between gap-2 text-xl font-medium leading-[24px]'}>
							<p className={'font-medium text-white'}>{stat.key}</p>
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

			<div className={'relative flex size-full w-3/5 justify-between overflow-hidden rounded-[64px] md:flex'}>
				<PageBackground
					position={'bottom-right'}
					showFrame={false}
					className={'!left-[12%] !top-[52%]'}
				/>
				<div className={'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'}>
					<ProfileByID
						profile={profile}
						disableAnimation
						noShare
					/>
				</div>
			</div>
		</div>
	);
}
