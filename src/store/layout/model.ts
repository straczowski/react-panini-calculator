export interface Layout {
	// 
}

export const enum LayoutActionTypes {
	SHOW_CONFIG_PAGE = '@@layout/SHOW_CONFIG_PAGE',
	SHOW_PANINI_PAGE = '@@layout/SHOW_PANINI_PAGE',
	RESET_APPLICATION = '@@layout/RESET_APPLICATION'
}

export interface LayoutState {
	readonly showConfigPage: boolean;
	readonly showPaniniPage: boolean;
}