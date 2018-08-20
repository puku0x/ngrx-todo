import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';


import { State } from '../reducers';
import { adapter } from '../reducers/todo.reducer';

/**
 * Selectors
 */
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
const getTodoState = createFeatureSelector<State>('todo');
const getLoading = createSelector(getTodoState, state => state.loading);
const getTodos = createSelector(getTodoState, selectAll);

/**
 * Query
 */
export const todoQuery = {
  getLoading,
  getTodos,
};
