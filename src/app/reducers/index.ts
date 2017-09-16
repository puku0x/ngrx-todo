import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo.reducer';

/**
 * App state
 */
export interface AppState {
  todo: fromTodo.State;
}

/**
 * Reducers
 */
export const reducers: ActionReducerMap<AppState> = {
  todo: fromTodo.reducer,
};
