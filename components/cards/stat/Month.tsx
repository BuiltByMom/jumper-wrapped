import {type ReactElement} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';

import type {TBaseCardProps} from './types';

import {fontThunder} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Month Card Props
 * Displays the month with the highest activity
 ************************************************************************************************/
type TMonthCardProps = {
	month: string;
} & TBaseCardProps;

export default function MonthCard({month, ...props}: TMonthCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundMonth.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundMonthMobile.jpg)'}>
			<CardTitle className={'absolute top-28 max-sm:top-36'}>
				<p
					className={cl(
						'text-[320px] font-bold uppercase leading-[200px] text-[#00FFB2]',
						fontThunder.className
					)}>
					{month.slice(0, 3)}
				</p>
			</CardTitle>

			<CardContent className={'absolute top-[18%] flex h-[67px] w-full justify-center'}>
				<p className={cl('uppercase text-[96px] font-bold leading-[96px] text-white', fontThunder.className)}>
					{month}
				</p>
			</CardContent>

			<CardCopy className={'mx-auto mt-auto w-full text-center'}>
				<p className={'text-2xl font-bold leading-[40px] text-white'}>
					<span className={'uppercase'}>{month}</span>
					{" was your crypto marathon. Who needs sleep when you're chasing gains?"}
				</p>
			</CardCopy>
		</Card>
	);
}
