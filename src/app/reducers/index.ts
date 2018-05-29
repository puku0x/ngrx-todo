import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment';

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
 * Meta reducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
