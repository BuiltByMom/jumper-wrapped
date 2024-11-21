import type {ReactElement} from 'react';

import {Button} from '@/components/common/Button';
import {ButtonArrow} from '@/components/common/ButtonArrow';
import {IconArrow} from '@/components/icons/IconArrow';

export default function Home(): ReactElement {
	return (
		<div>
			<IconArrow className={'rotate-180 text-black'} />
			<Button
				isBusy={true}
				title={'Button'}
			/>
			<Button title={'Button'} />
			<ButtonArrow direction={'left'} />
			<ButtonArrow direction={'right'} />
		</div>
	);
}
