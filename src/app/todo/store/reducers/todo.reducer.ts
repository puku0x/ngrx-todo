import { createReducer, on } from '@ngrx/store';

import { initialState, adapter } from '../states';
import * as TodoActions from '../actions';

export const reducer = createReducer(
  initialState,
  on(TodoActions.loadAll, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadAllSuccess, (state, { todos }) => {
    return adapter.setAll(todos, { ...state, loading: false });
  }),
  on(TodoActions.loadAllFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(TodoActions.load, (state, { id }) => {
    return { ...state, loading: true, selectedId: id };
  }),
  on(TodoActions.loadSuccess, (state, { todo }) => {
    return adapter.upsertOne(todo, { ...state, loading: false });
  }),
  on(TodoActions.loadFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(TodoActions.create, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.createSuccess, (state, { todo }) => {
    return adapter.addOne(todo, { ...state, loading: false });
  }),
  on(TodoActions.createFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(TodoActions.update, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.updateSuccess, (state, { todo }) => {
    return adapter.updateOne(
      { id: todo.id, changes: todo },
      { ...state, loading: false }
    );
  }),
  on(TodoActions.updateFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(TodoActions.remove, state => {
    return { ...state, loading: true };
  }),
  on(TodoActions.removeSuccess, (state, { id }) => {
    return adapter.removeOne(id, { ...state, loading: false });
  }),
  on(TodoActions.removeFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  })
);
