import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromTodo from './todo.reducer';

export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};

export const getTodoState = createFeatureSelector<State>('todo');
export const getTodoEntityState = createSelector(getTodoState, state => state.todo);
export const getTodos = createSelector(getTodoEntityState, fromTodo.selectAll);
export const getLoading = createSelector(getTodoEntityState, state => state.loading);
