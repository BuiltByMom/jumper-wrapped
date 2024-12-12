import {type ReactElement, useMemo} from 'react';

import {Card} from './Card';
import {CardContent, CardCopy, CardTitle} from './CardElements';
import {getLocalTimeFromUTC} from './utils';

import type {TBaseCardProps} from './types';

import {clockFont} from '@/components/utils/fonts';
import {cl} from '@/components/utils/tools';

/************************************************************************************************
 * Time Card Props
 * hour: UTC hour (1-24) to be converted to local time
 ************************************************************************************************/
type TTimeCardProps = {
	hour: string;
} & TBaseCardProps;

export default function TimeOfDayCard({hour, ...props}: TTimeCardProps): ReactElement {
	const {time, amPm, dayOrNight} = useMemo(() => getLocalTimeFromUTC(hour), [hour]);

	return (
		<Card
			{...props}
			backgroundImage={`url(/cards/stats/${
				dayOrNight === 'NIGHT' ? 'backgroundTimeNight' : 'backgroundTimeDay'
			}.jpg)`}
			mobileBackgroundImage={`url(/cards/stats/${
				dayOrNight === 'NIGHT' ? 'backgroundTimeNightMobile' : 'backgroundTimeDayMobile'
			}.jpg)`}>
			<CardTitle className={'text-white'}>
				<b className={'font-urbanist text-3xl font-bold uppercase leading-8 md:text-[32px]'}>{'Wen trade?'}</b>
				<p className={'font-urbanist text-xl font-medium'}>{'You traded most at'}</p>
			</CardTitle>

			<CardContent>
				<div className={'absolute inset-0 flex flex-col items-center justify-center px-10 md:px-0'}>
					<div
						className={cl(
							'relative w-[320px] md:w-[392px]',
							'flex aspect-[392/192] w-full items-center justify-center rounded-2xl border-8',
							'border-[#7AFFB2] text-[#009E5C] border-collapse'
						)}
						style={{
							background: 'radial-gradient(50% 50% at 50% 50%, #7AFFA7 0%, #47FF86 100%)',
							boxShadow: '0px 0px 32px 0px #62FF9766'
						}}>
						<div className={'flex flex-col items-center'}>
							<b
								className={cl(
									'text-center text-[110px] md:text-[160px] leading-[120px] md:leading-[144px] font-bold tabular-nums tracking-wider',
									clockFont.className
								)}>
								{time}
							</b>
							<span
								className={cl(
									'absolute right-4 top-0.5 text-[20px] md:text-[32px] font-bold leading-[36px]',
									clockFont.className
								)}>
								{amPm}
							</span>
						</div>
					</div>
				</div>
			</CardContent>

			<CardCopy>
				<p className={'font-urbanist text-xl font-medium text-white'}>
					{dayOrNight === 'NIGHT'
						? 'Chasing gains, sniping bags or trawling pump.fun?'
						: 'Trading waits for no manlet.'}
				</p>
			</CardCopy>
		</Card>
	);
}
