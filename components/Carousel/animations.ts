/************************************************************************************************
 * Carousel Animation Configuration
 * Defines the animation variants for card transitions
 * - Initial state: Hidden and offset to the right
 * - Animate state: Visible and centered
 * - Exit state: Hidden and offset to the left
 ************************************************************************************************/
export const cardAnimation = {
	initial: {opacity: 0, scale: 0, x: 50, z: 1},
	animate: {
		opacity: 1,
		scale: 1,
		x: 0,
		z: 1,
		transition: {
			duration: 0.5,
			ease: [0.16, 1, 0.3, 1],
			opacity: {duration: 0.35}
		}
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		x: -50,
		z: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};
