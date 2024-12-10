import {type ReactElement} from 'react';
import Image from 'next/image';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {cl} from '@/components/utils/tools';

type TBelovedChainCardProps = {
	chainName: string;
} & TBaseCardProps;

export default function BelovedChainCard({chainName, ...props}: TBelovedChainCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundBelovedChain.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundBelovedChainMobile.jpg)'}>
			<CardTitle className={'text-white'}>
				<b className={'font-urbanist text-[32px] font-bold uppercase leading-8'}>
					{`Just can't quit ${chainName}, huh?`}
				</b>
			</CardTitle>

			<CardContent
				className={
					'relative mt-auto flex aspect-square w-[208px] items-center justify-center pb-8 md:mt-auto md:pb-0'
				}>
				<Image
					className={cl(
						chainName === 'solana' ? 'size-[180px]' : 'h-[208px] w-auto rounded-full',
						'-mt-[120px] md:mt-2'
					)}
					src={`/chains/${chainName}.svg`}
					alt={chainName}
					width={208}
					height={208}
					quality={100}
				/>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium text-white'}>{'True degen romance right there.'}</p>
			</CardCopy>
		</Card>
	);
}
