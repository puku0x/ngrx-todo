import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo.reducer';

/**
 * App state
 */
export interface State {
  todo: fromTodo.State;
}

/**
 * Reducers
 */
export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};
