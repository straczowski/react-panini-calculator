import { action } from 'typesafe-actions';
import { PaniniActionTypes, PaniniConfiguration } from './model';

export const setConfiguration = (config: PaniniConfiguration) => action(PaniniActionTypes.PANINI_SET_CONFIG, config);
export const buyPack = (n: number) => action(PaniniActionTypes.BUY_PACK, n);
