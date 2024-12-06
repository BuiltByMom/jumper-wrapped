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
				<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
					{'You yeeted this token into the abyss.'}
				</b>
			</CardTitle>

			<CardContent className={'mt-auto'}>
				<b className={`${fontThunder.className} text-center text-[64px] font-bold leading-[64px]`}>
					{tokenName}
				</b>
			</CardContent>

			<CardCopy className={'mt-auto'}>
				<p className={'font-space-grotesk text-2xl font-medium'}>
					{'Hope you were right fren. Sayonara, bags!'}
				</p>
			</CardCopy>
		</Card>
	);
}
