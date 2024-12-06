/************************************************************************************************
 * Background Component Types
 * Type definitions for the background animation components
 ************************************************************************************************/
export type TSvgCirclesProps = {
	centerX: string;
	centerY: string;
	className: string;
	showFrame?: boolean;
};

export type TPageBackgroundProps = {
	position?: 'center' | 'bottom-right';
	showFrame?: boolean;
	className?: string;
};
