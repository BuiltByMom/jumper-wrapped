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
				<b className={'font-space-grotesk text-[32px] font-bold uppercase leading-8 text-white'}>
					{'Top bridged chain headline'}
				</b>
			</CardTitle>

			<CardContent
				className={
					' relative mt-auto flex items-center justify-center rounded-full border-[6px] border-[#F1F0F0] bg-[#F1F0F0]'
				}>
				<Image
					className={'size-[160px] rounded-full'}
					src={`/chains/${chainName}.svg`}
					alt={chainName}
					width={160}
					height={160}
					quality={100}
				/>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-space-grotesk text-xl font-medium text-white'}>
					{'Copy copy copy copy copy copy copy copy copy copy copy'}
				</p>
			</CardCopy>
		</Card>
	);
}
