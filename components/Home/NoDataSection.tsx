import {motion} from 'framer-motion';

import {NextYearButton} from '../NextYearButton';
import {noDataAnimation} from './animations';

import type {ReactElement} from 'react';

/************************************************************************************************
 * No Data Section Component
 * Shown when user has no activity data
 * Features:
 * - Informative message
 * - Next year teaser
 * - Smooth animations
 ************************************************************************************************/
export function NoDataSection(): ReactElement {
	return (
		<motion.div
			key={'no-data-section'}
			id={'primary-section'}
			{...noDataAnimation}>
			<NextYearButton />
		</motion.div>
	);
}
