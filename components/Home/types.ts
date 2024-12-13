/************************************************************************************************
 * Home Component Types
 * Type definitions for the home page components and states
 ************************************************************************************************/
export type TViewState = 'greetings' | 'carousel';

export type THomeProps = {
	isWalletSelectorOpen: boolean;
	set_isWalletSelectorOpen: (value: boolean) => void;
	set_view: (value: TViewState) => void;
};
