import { Reducer } from 'redux';
import { LayoutState, LayoutActionTypes } from './model';
import { PaniniActionTypes } from '../panini';

const initialState: LayoutState = {
	showConfigPage: true,
	showPaniniPage: false
}

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
	switch (action.type) {
		case LayoutActionTypes.SHOW_CONFIG_PAGE: {
			return {
				showConfigPage: true,
				showPaniniPage: false
			}
		}
		case LayoutActionTypes.SHOW_PANINI_PAGE: {
			return {
				showConfigPage: false,
				showPaniniPage: true
			}
		}
		case PaniniActionTypes.PANINI_SET_CONFIG: {
			return {
				showConfigPage: false,
				showPaniniPage: true
			}
		}
		default: {
			return state
		}
	}
}

export { reducer as layoutReducer }