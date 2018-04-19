import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromTodo from './todo.reducer';

export interface State {
  todo: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  todo: fromTodo.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getTodoState = createFeatureSelector<State>('todo');
export const getTodoEntityState = createSelector(getTodoState, state => state.todo);
export const getTodos = createSelector(getTodoEntityState, fromTodo.selectAll);
export const getLoading = createSelector(getTodoEntityState, state => state.loading);
