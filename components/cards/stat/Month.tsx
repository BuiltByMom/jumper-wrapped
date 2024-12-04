import localFont from 'next/font/local';

import {Card} from './Card';

import type {HTMLAttributes, ReactElement} from 'react';

import {cl} from '@/components/utils/tools';

export type TMonthCardProps = {
	month: string;
} & HTMLAttributes<HTMLDivElement>;

export const fontMonth = localFont({
	src: '../../../public/fonts/Thunder-BoldLC.otf',
	weight: '700',
	style: 'normal'
});

export function MonthCard(props: TMonthCardProps): ReactElement {
	return (
		<Card
			{...props}
			backgroundImage={'url(/cards/stat/backgroundMonth.jpg)'}
			mobileBackgroundImage={'url(/cards/stat/backgroundMonthMobile.jpg)'}>
			<>
				<div className={'absolute top-28 max-sm:top-36'}>
					<p
						className={cl(
							'text-[320px] font-bold uppercase leading-[200px] text-[#00FFB2]',
							fontMonth.className
						)}>
						{props.month.slice(0, 3)}
					</p>
				</div>
				<div className={'absolute top-1/2 -translate-y-1/4 md:top-[170px]'}>
					<p className={cl('uppercase text-[96px] font-bold leading-[96px] text-white', fontMonth.className)}>
						{props.month}
					</p>
				</div>

				<div
					className={
						'absolute bottom-[-80px] left-1/2 w-[392px] -translate-x-1/2 text-center md:bottom-[-500px]'
					}>
					<p className={'text-2xl font-bold leading-[40px] text-white'}>
						<span className={'uppercase'}>{props.month}</span>
						{" was your crypto marathon. Who needs sleep when you're chasing gains?"}
					</p>
				</div>
			</>
		</Card>
	);
}
