import { Reducer } from 'redux';
import { PaniniState, PaniniActionTypes } from './model';
import { LayoutActionTypes } from '../layout';

const initialState: PaniniState = {
	players: 540,
	stickerPerPack: 5,
	pricePerPack: 0.6,
	prediction: {
		avgOfStickersNeeded: 5317,
		avgOfPacksToBuy: 1063,
		avgMoneyToInvest: 637.8
	}
}

const reducer: Reducer<PaniniState> = (state = initialState, action) => {
	switch (action.type) {
		case PaniniActionTypes.PANINI_SET_CONFIG: {

			let c = 0;
			for (let i = 1; i <= action.payload.players; i++) {
				c = c + (1 / i);
			}
			const sum = action.payload.players * c;
			console.log(sum);

			return {
				...state,
				players: action.payload.players,
				stickerPerPack: action.payload.stickerPerPack,
				pricePerPack: action.payload.pricePerPack,
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

export { reducer as paniniReducer }