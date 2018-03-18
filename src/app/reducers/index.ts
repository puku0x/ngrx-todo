import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromTodo from './todo.reducer';

/**
 * App state
 */
export interface State {
  todos: fromTodo.State;
}

/**
 * App reducers
 */
export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducer,
};

/**
 * Meta reducers
 */
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Selectors
 */
export const getTodosState = createFeatureSelector<fromTodo.State>('todos');
export const selectTodos = createSelector(getTodosState, fromTodo.selectAll);
export const selectLoading = createSelector(getTodosState, state => state.loading);

