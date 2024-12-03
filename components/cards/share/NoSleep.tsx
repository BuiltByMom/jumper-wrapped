import {type ReactElement, useMemo} from 'react';

import Card from './Card';

import type {TCardProps} from './Card';

type TNoSleepCardProps = Omit<TCardProps, 'children'> & {
	timestamp: string;
};

export default function NoSleepCard(props: TNoSleepCardProps): ReactElement {
	const [time, amOrPm] = useMemo((): [string, string] => {
		const date = new Date(Number(props.timestamp) * 1000);
		const hours = date.getHours();
		const minutes = date.getMinutes();

		// Format time as HH:MM
		const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

		// Determine AM/PM
		const amPm = hours >= 12 ? 'PM' : 'AM';

		return [formattedTime, amPm];
	}, [props.timestamp]);
	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute top-[507px] px-6'}>
					<p className={'font-space-grotesk text-center text-xl font-medium text-[#02693E]'}>
						{`Trading at ${time} ${amOrPm} while normies catch Z's. NGMI? Not you!`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 bg-cover bg-no-repeat'}
				style={{backgroundImage: 'url(/cards/share/no-sleep.jpg)'}}
			/>
		</Card>
	);
}
