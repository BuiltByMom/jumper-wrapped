import {type ReactElement} from 'react';
import Image from 'next/image';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

/************************************************************************************************
 * Top Bridge Chain Card Props
 * Displays user's most used blockchain for bridging
 ************************************************************************************************/
type TTopBridgeChainCardProps = {
	chainName: string;
} & TBaseCardProps;

export default function TopBridgeChainCard({chainName, ...props}: TTopBridgeChainCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundBelovedChain.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundBelovedChainMobile.jpg)'}>
			<CardTitle className={'text-white'}>
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{`Just can't quit ${chainName}, huh?`}
				</b>
			</CardTitle>

			<CardContent
				className={
					'relative mt-auto flex aspect-square w-[208px] items-center justify-center pb-8 md:mt-auto md:pb-0'
				}>
				<Image
					className={chainName === 'solana' ? 'size-[180px]' : 'size-[208px] rounded-full'}
					src={`/chains/${chainName}.svg`}
					alt={chainName}
					width={208}
					height={208}
					quality={100}
				/>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-space-grotesk text-2xl font-medium text-white'}>
					{'True degen romance right there.'}
				</p>
			</CardCopy>
		</Card>
	);
}
