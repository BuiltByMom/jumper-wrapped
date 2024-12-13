/************************************************************************************************
 * Home Animation Configurations
 * Defines animation variants for different sections of the home page
 ************************************************************************************************/
export const greetingsAnimation = {
	initial: {opacity: 0, scale: 0},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 17,
			mass: 1.5,
			opacity: {duration: 0.4}
		}
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 10
		}
	}
};

export const noDataAnimation = {
	initial: {opacity: 0, scale: 0.9},
	animate: {opacity: 1, scale: 1},
	exit: {opacity: 0, scale: 0.8},
	transition: {duration: 1}
};
