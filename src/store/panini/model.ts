export interface PaniniConfiguration {
	players: number;
	stickerPerPack: number;
	pricePerPack: number;
}

export interface PaniniPrediction {
	avgOfStickersNeeded: number;
	avgOfPacksToBuy: number;
	avgMoneyToInvest: number;
}

export const enum PaniniActionTypes {
	PANINI_SET_CONFIG = '@@panini/PANINI_SET_CONFIG'
}

export interface PaniniState {
	readonly players: number;
	readonly stickerPerPack: number;
	readonly pricePerPack: number;
	readonly prediction: PaniniPrediction;
}