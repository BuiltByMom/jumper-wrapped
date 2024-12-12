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
				<b className={'font-urbanist text-xl font-bold uppercase leading-8 md:text-[32px]'}>
					{`Just can't quit ${chainName}, huh?`}
				</b>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex items-center justify-center'}>
					<Image
						className={cl(
							chainName === 'solana' ? 'w-[180px]' : 'h-[208px] w-auto rounded-full',
							'-mt-20 md:-mt-0'
						)}
						src={`/chains/${chainName}.svg`}
						alt={chainName}
						width={208}
						height={208}
						quality={90}
					/>
				</div>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium text-white'}>{'True degen romance right there.'}</p>
			</CardCopy>
		</Card>
	);
}
