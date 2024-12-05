/************************************************************************************************
 * Shared Animation Configurations
 * Common animation settings used across stat cards for consistent motion
 * - titleAnimation: Slides in from top
 * - contentAnimation: Scales up from center
 * - copyAnimation: Slides in from bottom
 ************************************************************************************************/
export const animationConfig = {
	type: 'spring',
	bounce: 0.3,
	duration: 0.6,
	delay: 0.3,
	stiffness: 150,
	damping: 15
};

export const animations = {
	title: {
		initial: {y: -120, opacity: 0},
		animate: {
			y: 0,
			opacity: 1,
			transition: animationConfig
		}
	},
	content: {
		initial: {scale: 0.6, opacity: 0},
		animate: {
			scale: 1,
			opacity: 1,
			transition: animationConfig
		}
	},
	copy: {
		initial: {y: 120, opacity: 0},
		animate: {
			y: 0,
			opacity: 1,
			transition: animationConfig
		}
	}
};
