import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {fontThunder} from '@/components/utils/fonts';

type TFavTokenCardProps = {
	tokenName: string;
} & TBaseCardProps;

export default function FavTokenCard({tokenName, ...props}: TFavTokenCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stats/backgroundFavToken.jpg)'}
			mobileBackgroundImage={'url(/cards/stats/backgroundFavTokenMobile.jpg)'}>
			<CardTitle className={''}>
				<b className={'font-urbanist text-3xl font-bold uppercase leading-8 md:text-[32px]'}>
					{'You yeeted this token into the abyss.'}
				</b>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex flex-col items-center justify-center'}>
					<b className={`${fontThunder.className} text-center text-[64px] font-bold leading-[64px]`}>
						{tokenName}
					</b>
				</div>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-urbanist text-xl font-medium'}>{'Hope you were right fren. Sayonara, bags!'}</p>
			</CardCopy>
		</Card>
	);
}
