import localFont from 'next/font/local';

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

export const monthMap = {
	January: 'Jan',
	February: 'Feb',
	March: 'Mar',
	April: 'Apr',
	May: 'May',
	June: 'Jun',
	July: 'Jul',
	August: 'Aug',
	September: 'Sep',
	October: 'Oct',
	November: 'Nov',
	December: 'Dec'
} as const;

export function MonthCard(props: TMonthCardProps): ReactElement {
	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<div className={'relative z-50 flex size-full flex-col items-center p-6'}>
				<div className={'absolute top-20'}>
					<p
						className={cl(
							'text-[320px] font-bold uppercase leading-[200px] text-[#00FFB2]',
							fontMonth.className
						)}>
						{monthMap[props.month as keyof typeof monthMap]}
					</p>
				</div>
				<div className={'absolute top-1/4 -translate-y-1/4'}>
					<p className={cl('uppercase text-[96px] font-bold leading-[96px] text-white', fontMonth.className)}>
						{props.month}
					</p>
				</div>

				<div className={'absolute bottom-[71px] left-1/2 w-[380px] -translate-x-1/2 text-center'}>
					<p className={'text-2xl font-bold leading-[40px] text-white'}>
						{"was your crypto marathon. Who needs sleep when you're chasing gains?"}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/stat/backgroundMonth.jpg)'}}
			/>
		</div>
	);
}
