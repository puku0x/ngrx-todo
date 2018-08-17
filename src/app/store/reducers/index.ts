import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

/**
 * Root state
 */
export interface State {
}

/**
 * Root reducers
 */
export const reducers: ActionReducerMap<State> = {
};

/**
 * Logger
 */
export function logger(reducer: ActionReducer<State>) {
  return (state, action) => {
    const newState = reducer(state, action);
    console.log('action', action);
    console.log('state', newState);
    return newState;
  };
}

/**
 * Meta reducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze, logger] : [logger];
