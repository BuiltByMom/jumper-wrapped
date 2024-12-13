import {type ReactElement, useMemo} from 'react';

import {getLocalTimeFromUTC} from '../stats/utils';
import Card from './Card';

import type {TCardProps} from './Card';

type TNoSleepCardProps = Omit<TCardProps, 'children'> & {
	busiestHour: string | undefined;
};

export default function NoSleepCard(props: TNoSleepCardProps): ReactElement {
	const {time, amPm} = useMemo(() => getLocalTimeFromUTC(props.busiestHour), [props.busiestHour]);

	return (
		<Card {...props}>
			<div className={'relative z-50 flex size-full'}>
				<div className={'absolute bottom-[48px] px-6'}>
					<p className={'font-urbanist text-center text-xl font-medium text-[#02693E]'}>
						{`Trading ${time ? 'at' : ''} ${time ?? ''} ${
							amPm ?? ''
						} while normies catch Z's. NGMI? Not you!`}
					</p>
				</div>
			</div>
			<div
				className={'absolute inset-0 z-10 rounded-[32px] border-4 border-accent-hover'}
				style={{backgroundImage: 'url(/cards/profiles/no-sleep.jpg)'}}
			/>
		</Card>
	);
}
