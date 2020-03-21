import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName, adapter } from '../states';

/**
 * Selectors
 */
const getTodoState = createFeatureSelector<State>(featureName);
const { selectAll, selectEntities } = adapter.getSelectors();

export const getLoading = createSelector(getTodoState, state => state.loading);

export const getError = createSelector(getTodoState, state => state.error);

export const getSelectedId = createSelector(
  getTodoState,
  state => state.selectedId
);

export const getTodos = createSelector(getTodoState, selectAll);

export const getTodoEntities = createSelector(getTodoState, selectEntities);

export const getTodo = createSelector(
  getSelectedId,
  getTodoEntities,
  (id, entities) => (id ? entities[id] : undefined)
);
