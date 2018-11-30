import { Reducer } from 'redux';
import { PaniniState, PaniniActionTypes } from './model';
import { LayoutActionTypes } from '../layout';

const initialState: PaniniState = {
	players: 682,
	stickerPerPack: 5,
	pricePerPack: 0.9,
	prediction: {
		avgOfStickersNeeded: 4843,
		avgOfPacksToBuy: 969,
		avgMoneyToInvest: 871.8
	},
	shop: {
		filledAlbum: initPaniniAlbumArray(682),
		moneyInvested: 0,
		packsBought: 0
	}
}

const reducer: Reducer<PaniniState> = (state = initialState, action) => {

	switch (action.type) {
		case PaniniActionTypes.PANINI_SET_CONFIG: {

			let c = 0;
			for (let i = 1; i <= action.payload.players; i++) {
				c = c + (1 / i);
			}
			const avgOfStickersNeeded = Math.round(action.payload.players * c);
			const avgOfPacksToBuy = Math.round(avgOfStickersNeeded / action.payload.stickerPerPack);
			const avgMoneyToInvest = Math.round( avgOfPacksToBuy * action.payload.pricePerPack * 100 ) / 100;

			const filledAlbum = initPaniniAlbumArray(action.payload.players);

			return {
				players: action.payload.players,
				stickerPerPack: action.payload.stickerPerPack,
				pricePerPack: action.payload.pricePerPack,
				prediction: {
					avgOfStickersNeeded: avgOfStickersNeeded,
					avgOfPacksToBuy: avgOfPacksToBuy,
					avgMoneyToInvest: avgMoneyToInvest
				},
				shop: {
					filledAlbum: filledAlbum,
					moneyInvested: 0,
					packsBought: 0
				}
			}
		}
		case PaniniActionTypes.BUY_PACK: {
			const packsBought: number = state.shop.packsBought + Number(action.payload);
			const moneyInvested: number = state.shop.moneyInvested + (action.payload * state.pricePerPack);
			
			let filledAlbum = state.shop.filledAlbum;

			for (let x = 0; x < action.payload; x++) {
				for (let y = 0; y < state.stickerPerPack; y++) {
					const i = Math.floor(Math.random() * state.players);
					filledAlbum[i] = filledAlbum[i] + 1;
				}
			}

			return {
				...state,
				shop: {
					packsBought: packsBought,
					moneyInvested: moneyInvested,
					filledAlbum: filledAlbum
				}
			}
		}
		case LayoutActionTypes.RESET_APPLICATION: {
			return initialState
		}
		default: {
			return state
		}
	}
}


function initPaniniAlbumArray(n: number): Array<number> {
	const arr = new Array(Number(n));
	for (let i = 0; i < arr.length; i++) {
		arr[i] = 0;
	}
	return arr
}

export { reducer as paniniReducer }