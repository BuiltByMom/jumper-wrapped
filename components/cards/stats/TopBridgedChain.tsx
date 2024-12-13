import {type ReactElement} from 'react';
import Image from 'next/image';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

type TTopBridgedChainCardProps = {
	chainName: string;
} & TBaseCardProps;

export default function TopBridgedChainCard({chainName, ...props}: TTopBridgedChainCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundTopBridged.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundTopBridgedMobile.jpg)'}>
			<CardTitle className={''}>
				<b className={'font-urbanist text-3xl font-bold uppercase leading-8 text-white md:text-[32px]'}>
					{'You seem a little addicted'}
				</b>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex items-center justify-center'}>
					<Image
						className={'-mt-20 size-[160px] rounded-full md:-mt-0'}
						src={`/chains/${chainName}.svg`}
						alt={chainName}
						width={160}
						height={160}
						quality={100}
					/>
				</div>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium text-white'}>
					{'Your number one place to hang.'}
					<br /> {'Do you need an intervention?'}
				</p>
			</CardCopy>
		</Card>
	);
}
