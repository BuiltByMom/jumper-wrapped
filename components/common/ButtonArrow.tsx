import {IconArrow} from '../icons/IconArrow';
import {cl} from '../utils/tools';
import {Button} from './Button';

import type {ReactElement} from 'react';

type TButtonArrowProps = {
	direction?: 'left' | 'right';
};
export function ButtonArrow({direction = 'left'}: TButtonArrowProps): ReactElement {
	return (
		<Button className={'!w-[95px]'}>
			<IconArrow className={cl('text-black', direction === 'left' ? '' : 'rotate-180')} />
		</Button>
	);
}
