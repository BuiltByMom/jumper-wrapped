import {motion} from 'framer-motion';

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

const buttonAnimation = {
	tap: {
		scale: 0.9,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 15
		}
	}
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
		<motion.div
			whileTap={'tap'}
			variants={buttonAnimation}
			className={cl('w-[95px] xl:!w-[142px] xl:!h-[96px] !cursor-pointer origin-center', className)}>
			<Button onClick={onClick}>
				<IconArrow className={cl('text-black xl:size-12', direction === 'left' ? '' : 'rotate-180')} />
			</Button>
		</motion.div>
	);
}
