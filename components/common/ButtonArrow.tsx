import {IconArrow} from '../icons/IconArrow';
import {cl} from '../utils/tools';
import {Button} from './Button';

import type {ReactElement} from 'react';

type TButtonArrowProps = {
	direction?: 'left' | 'right';
	className?: string;
	onClick: () => void;
	disabled?: boolean;
};
export function ButtonArrow({
	direction = 'left',
	className,
	onClick,
	disabled
}: TButtonArrowProps): ReactElement | null {
	if (disabled) {
		return null;
	}
	return (
		<Button
			onClick={onClick}
			className={cl('!w-[95px]', className)}>
			<IconArrow className={cl('text-black', direction === 'left' ? '' : 'rotate-180')} />
		</Button>
	);
}
