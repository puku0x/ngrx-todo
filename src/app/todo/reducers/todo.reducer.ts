import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import * as TodoActions from '../actions';
import { Todo } from '../models';

export interface State extends EntityState<Todo> {
  error: unknown | null;
  loading: boolean;
  selectedId: string | null;
}

export const adapter = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false,
  selectedId: null,
});

export const { name, reducer, selectTodoState, selectLoading, selectError } =
  createFeature({
    name: 'todo',
    reducer: createReducer(
      initialState,
      on(TodoActions.loadAll, (state) => ({ ...state, loading: true })),
      on(TodoActions.loadAllSuccess, (state, { todos }) =>
        adapter.setAll(todos, { ...state, loading: false })
      ),
      on(TodoActions.loadAllFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(TodoActions.load, (state, { id }) => ({
        ...state,
        loading: true,
        selectedId: id,
      })),
      on(TodoActions.loadSuccess, (state, { todo }) =>
        adapter.upsertOne(todo, { ...state, loading: false })
      ),
      on(TodoActions.loadFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(TodoActions.create, (state) => ({ ...state, loading: true })),
      on(TodoActions.createSuccess, (state, { todo }) =>
        adapter.addOne(todo, { ...state, loading: false })
      ),
      on(TodoActions.createFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(TodoActions.update, (state) => ({ ...state, loading: true })),
      on(TodoActions.updateSuccess, (state, { todo }) =>
        adapter.updateOne(
          { id: todo.id, changes: todo },
          { ...state, loading: false }
        )
      ),
      on(TodoActions.updateFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      })),
      on(TodoActions.remove, (state) => ({ ...state, loading: true })),
      on(TodoActions.removeSuccess, (state, { id }) =>
        adapter.removeOne(id, { ...state, loading: false })
      ),
      on(TodoActions.removeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))
    ),
  });

export const { selectAll: selectTodos } = adapter.getSelectors(selectTodoState);
