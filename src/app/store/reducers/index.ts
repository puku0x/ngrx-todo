import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
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
  router: fromRouter.routerReducer
};

/**
 * Logger
 * @param reducer Reducer
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * Meta reducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
