import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

/**
 * Root state
 */
export interface State {
  router: fromRouter.RouterReducerState;
}

/**
 * Root reducers
 */
export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
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
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze, logger] : [];
