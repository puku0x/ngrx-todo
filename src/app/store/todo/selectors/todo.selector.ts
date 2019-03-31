import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, STATE_ID } from '../reducers';
import { adapter } from '../reducers/todo.reducer';

/**
 * Selectors
 */
const { selectAll } = adapter.getSelectors();
const getTodoState = createFeatureSelector<State>(STATE_ID);
const getLoading = createSelector(
  getTodoState,
  state => state.loading
);
const getTodos = createSelector(
  getTodoState,
  selectAll
);

/**
 * Queries
 */
export const todoQuery = {
  getLoading,
  getTodos
};
