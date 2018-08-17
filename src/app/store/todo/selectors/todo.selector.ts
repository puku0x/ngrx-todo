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
// export const getLoading = (state: State) => state.loading;
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
const getTodoState = createFeatureSelector<State>('todo');
// const getTodoEntityState = createSelector(getTodoFeatureState, state => state.todos);
const getLoading = createSelector(getTodoState, state => state.loading);
const getTodos = createSelector(getTodoState, selectAll);
// export const getTodos = createSelector(getTodoEntityState, fromTodo.selectAll);
// export const getLoading = createSelector(getTodoEntityState, fromTodo.getLoading);


/**
 * Query
 */
export const todoQuery = {
  getLoading,
  getTodos,
};
