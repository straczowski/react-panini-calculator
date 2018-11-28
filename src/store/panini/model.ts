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

export interface PaniniShop {
	packsBought: number;
	moneyInvested: number;
	filledAlbum: Array<number>;
}

export const enum PaniniActionTypes {
	PANINI_SET_CONFIG = '@@panini/PANINI_SET_CONFIG',
	BUY_PACK = '@@panini/BUY_PACK'
}

export interface PaniniState {
	readonly players: number;
	readonly stickerPerPack: number;
	readonly pricePerPack: number;
	readonly prediction: PaniniPrediction;
	readonly shop: PaniniShop;
}