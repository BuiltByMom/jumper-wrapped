import {type HTMLAttributes, type ReactElement, useMemo} from 'react';
import localFont from 'next/font/local';

import {cl} from '@/components/utils/tools';

const fontTime = localFont({
	src: '../../../public/fonts/dsFont.ttf',
	weight: '400',
	style: 'normal'
});

type TTimeCardProps = {
	timestamp: string;
} & HTMLAttributes<HTMLDivElement>;

export default function TimeCard({timestamp, ...props}: TTimeCardProps): ReactElement {
	const [time, amOrPm, dayOrNight] = useMemo((): [string, string, string] => {
		const date = new Date(Number(timestamp) * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();

		// Format time as HH:MM
		const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

		// Determine AM/PM
		const amPm = hours >= 12 ? 'PM' : 'AM';

		// Determine day/night (night is between 20:00 and 08:00)
		const isNight = hours >= 20 || hours < 8;
		const timeOfDay = isNight ? 'NIGHT' : 'DAY';

		return [formattedTime, amPm, timeOfDay];
	}, [timestamp]);

	return (
		<div className={cl('relative flex aspect-[440/600] rounded-[32px] overflow-hidden w-[440px]', props.className)}>
			<div className={'relative z-50 flex size-full flex-col items-center p-6'}>
				<div className={'flex flex-col gap-2 pb-6 pt-2 text-center text-white'}>
					<b className={'font-space-grotesk text-[40px] font-bold uppercase leading-[40px]'}>
						{'Wen trade?'}
					</b>
					<p className={'font-space-grotesk text-2xl font-medium'}>{'You traded most at'}</p>
				</div>

				<div
					className={cl(
						'relative',
						'flex aspect-[392/192] w-full items-center justify-center rounded-2xl border-8',
						'border-[#7AFFB2] text-[#009E5C]'
					)}
					style={{
						background: 'radial-gradient(50% 50% at 50% 50%, #7AFFA7 0%, #47FF86 100%)',
						boxShadow: '0px 0px 32px 0px #62FF9766'
					}}>
					<div className={'flex flex-col items-center'}>
						<b
							className={cl(
								'text-center text-[160px] font-bold leading-[144px] tabular-nums tracking-wider',
								fontTime.className
							)}>
							{time}
						</b>
						<span
							className={`font-space-grotesk absolute right-4 top-0.5 text-[40px] font-bold leading-[36px] ${fontTime.className}`}>
							{amOrPm}
						</span>
					</div>
				</div>

				<div className={'mt-auto flex items-center justify-center pt-6 text-center'}>
					<p className={'font-space-grotesk w-3/4 text-2xl font-medium text-white'}>
						{'Chasing gains, sniping bags or trawling pump.fun?'}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{
					backgroundImage: `url(/cards/stat/${
						dayOrNight === 'NIGHT' ? 'backgroundTimeNight' : 'backgroundTimeDay'
					}.jpg)`
				}}
			/>
		</div>
	);
}
