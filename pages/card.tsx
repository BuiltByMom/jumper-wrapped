import type {ReactElement} from 'react';

import DivaCardCard from '@/components/cards/share/Diva';
import SerBridgealotCard from '@/components/cards/share/SerBridgealot';
import TimeCard from '@/components/cards/stat/Time';
import VolumeCard from '@/components/cards/stat/Volume';

export default function Index(): ReactElement {
	return (
		<div className={'grid grid-cols-3 items-center justify-center gap-4'}>
			<DivaCardCard
				tokens={['DAI', 'USDC', 'USDT']}
				topRatio={42.42}
				width={440}
			/>
			<SerBridgealotCard
				volumeInUSD={1234567.89}
				topRatio={42.42}
				width={440}
			/>

			<VolumeCard variant={'Green'}>
				<div className={'size-full rounded-2xl bg-red-500'} />
			</VolumeCard>
			<VolumeCard variant={'Purple'}>
				<div className={'size-full rounded-2xl bg-red-500'} />
			</VolumeCard>

			<TimeCard timestamp={'1733195469'} />
			<TimeCard timestamp={'1733235069'} />
		</div>
	);
}
