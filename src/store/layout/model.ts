export interface Layout {
	// players: number;
}

export const enum LayoutActionTypes {
	SHOW_CONFIG_PAGE = '@@layout/SHOW_CONFIG_PAGE',
	SHOW_PANINI_PAGE = '@@layout/SHOW_PANINI_PAGE'
}

export interface LayoutState {
	readonly showConfigPage: boolean;
	readonly showPaniniPage: boolean;
}