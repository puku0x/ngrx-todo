import { createAction, union } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '@app/models';

export const loadTodos = createAction(
  '[Todo/Page] Load',
  (payload: { offset?: number; limit?: number } = {}) => ({ payload })
);

export const loadTodosSuccess = createAction(
  '[Todo/API] Load Success',
  (payload: { todos: Todo[] }) => ({ payload })
);

export const loadTodosFailure = createAction(
  '[Todo/API] Load Failure',
  (payload: { error: any }) => ({ payload })
);

export const createTodo = createAction(
  '[Todo/Page] Create',
  (payload: { todo: Partial<Todo> }) => ({ payload })
);

export const createTodoSuccess = createAction(
  '[Todo/API] Create Success',
  (payload: { todo: Todo }) => ({ payload })
);

export const createTodoFailure = createAction(
  '[Todo/API] Create Failure',
  (payload: { error: any }) => ({ payload })
);

export const updateTodo = createAction(
  '[Todo/Page] Update',
  (payload: { todo: Update<Todo> }) => ({ payload })
);

export const updateTodoSuccess = createAction(
  '[Todo/API] Update Success',
  (payload: { todo: Update<Todo> }) => ({ payload })
);

export const updateTodoFailure = createAction(
  '[Todo/API] Update Failure',
  (payload: { error: any }) => ({ payload })
);

export const deleteTodo = createAction(
  '[Todo/Page] Delete',
  (payload: { id: string }) => ({ payload })
);

export const deleteTodoSuccess = createAction(
  '[Todo/API] Delete Success',
  (payload: { id: string }) => ({ payload })
);

export const deleteTodoFailure = createAction(
  '[Todo/API] Delete Failure',
  (payload: { error: any }) => ({ payload })
);

const all = union({
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  createTodoSuccess,
  createTodoFailure,
  updateTodo,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure
});

export type TodoActions = typeof all;
