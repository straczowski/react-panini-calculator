export interface Panini {
	players: number;
}

export const enum PaniniActionTypes {
	PANINI_SET_PLAYERS = '@@panini/PANINI_SET_PLAYERS'
}

export interface PaniniState {
	readonly players: number
}