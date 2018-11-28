import { combineReducers, Dispatch, Reducer, Action, AnyAction } from 'redux'
// import { routerReducer, RouterState } from 'react-router-redux'
import { PaniniState, paniniReducer } from './panini'
import { LayoutState, layoutReducer } from './layout';

// The top-level state object.
export interface ApplicationState {
  panini: PaniniState,
  layout: LayoutState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<ApplicationState>({
  panini: paniniReducer,
  layout: layoutReducer
});

// export * from './panini';