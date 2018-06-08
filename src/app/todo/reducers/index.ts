import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromTodo from './todo.reducer';

export interface State {
  todos: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodo.reducer,
};

export const getTodoState = createFeatureSelector<State>('todo');
export const getTodoEntityState = createSelector(getTodoState, state => state.todos);
export const getTodos = createSelector(getTodoEntityState, fromTodo.selectAll);
export const getLoading = createSelector(getTodoEntityState, state => state.loading);
