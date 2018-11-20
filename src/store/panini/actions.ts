import { action } from 'typesafe-actions';
import { PaniniActionTypes } from './model';

export const setPlayers = (players: number) => action(PaniniActionTypes.PANINI_SET_PLAYERS, players)
