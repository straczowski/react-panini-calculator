import { Reducer } from 'redux';
import { PaniniState, PaniniActionTypes } from './model';

const initialState: PaniniState = {
	players: 0 
}

const reducer: Reducer<PaniniState> = (state = initialState, action) => {
	switch (action.type) {
		case PaniniActionTypes.PANINI_SET_PLAYERS: {
			return { ...state, players: action.payload }
		}
		default: {
			return state
		}
	}
}

export { reducer as paniniReducer }