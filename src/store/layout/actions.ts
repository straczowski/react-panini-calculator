import { action } from 'typesafe-actions';
import { LayoutActionTypes } from './model';

export const showConfigPage = () => action(LayoutActionTypes.SHOW_CONFIG_PAGE);
export const showPaniniPage = () => action(LayoutActionTypes.SHOW_PANINI_PAGE);
export const resetApplication = () => action(LayoutActionTypes.RESET_APPLICATION);