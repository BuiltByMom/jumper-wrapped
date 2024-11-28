import {type ReactElement, useEffect} from 'react';
import {useRouter} from 'next/router';
import {useAccount} from 'wagmi';
import {useWallet} from '@solana/wallet-adapter-react';

import {MainPageBackgound} from '@/components/Backgrounds';
import {CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from '@/components/carouselContext';
import {Button} from '@/components/common/Button';
import {Header} from '@/components/common/Header';

const cards = [
	{name: 'lol', description: 'kek'},
	{name: 'lol1', description: 'kek'},
	{name: 'lol2', description: 'kek'},
	{name: 'lol3', description: 'kek'},
	{name: 'lol4', description: 'kek'},
	{name: 'lol5', description: 'kek'}
];

export default function Index(): ReactElement {
	const account = useWallet();
	const {isConnected} = useAccount();
	const router = useRouter();

	/**********************************************************************************************
	 * Redirect to home if user is not connected
	 *********************************************************************************************/
	useEffect(() => {
		if (!account.connected && !isConnected) {
			router.push('/');
		}
	}, [account, isConnected, router]);

	return (
		<div className={'flex h-screen max-h-screen w-full items-center justify-center '}>
			<MainPageBackgound />
			<Header set_isWalletSelectorOpen={() => {}} />
			<div className={'relative w-[800px] px-20 xl:w-[1200px]'}>
				<CarouselContent className={'-ml-2 md:-ml-4'}>
					{cards.map((game, index) => (
						<CarouselItem
							key={index}
							className={'h-[655px] w-[440px] xl:h-[1200px] xl:w-[660px]'}>
							{index < cards.length - 1 ? (
								<div
									className={
										'flex h-[600px] w-[440px] items-center justify-center rounded-[32px] border-4 border-[#B999FF] bg-black p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
									}>
									<p className={'text-3xl font-bold uppercase text-white'}>{game.name}</p>
								</div>
							) : (
								<div className={'relative z-40'}>
									<div
										className={
											'flex h-[600px] w-[440px] items-center justify-center rounded-[32px] border-4 border-accent bg-black bg-gradient-to-b from-[#9700F4] to-[#3238C9] p-1 xl:h-[982px] xl:w-[660px] xl:rounded-[48px]'
										}>
										<p className={'text-3xl font-bold uppercase text-white'}>{game.name}</p>
									</div>
									<Button
										className={
											'absolute bottom-[-25px] left-1/2 z-50 -translate-x-1/2 xl:bottom-[-32px] xl:!w-[320px]'
										}>
										<p className={'text-2xl font-bold uppercase text-black xl:text-3xl'}>
											{'Share on X'}
										</p>
									</Button>
								</div>
							)}
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</div>
		</div>
	);
}
