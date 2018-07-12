import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromTodo from './todo.reducer';

/**
 * State
 */
export interface State {
  todos: fromTodo.State;
}

/**
 * Reducers
 */
export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducer,
};

/**
 * Selectors
 */
export const getTodoFeatureState = createFeatureSelector<State>('todo');
export const getTodoEntityState = createSelector(getTodoFeatureState, state => state.todos);
export const getTodos = createSelector(getTodoEntityState, fromTodo.selectAll);
export const getLoading = createSelector(getTodoEntityState, fromTodo.getLoading);
