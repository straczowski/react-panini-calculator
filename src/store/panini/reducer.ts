import { Reducer } from 'redux';
import { PaniniState, PaniniActionTypes } from './model';

const initialState: PaniniState = {
	players: 0,
	stickerPerPack: 0,
	pricePerPack: 0
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

			return action.payload
		}
		default: {
			return state
		}
	}
}

export { reducer as paniniReducer }