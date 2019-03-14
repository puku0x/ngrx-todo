import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '@app/models';

// prettier-ignore
export enum TodoActionTypes {
  LoadTodos         = '[Todo/Page] Load',
  LoadTodosSuccess  = '[Todo/API] Load Success',
  LoadTodosFail     = '[Todo/API] Load Fail',
  CreateTodo        = '[Todo/Page] Create',
  CreateTodoSuccess = '[Todo/API] Create Success',
  CreateTodoFail    = '[Todo/API] Create Fail',
  UpdateTodo        = '[Todo/Page] Update',
  UpdateTodoSuccess = '[Todo/API] Update Success',
  UpdateTodoFail    = '[Todo/API] Update Fail',
  DeleteTodo        = '[Todo/Page] Delete',
  DeleteTodoSuccess = '[Todo/API] Delete Success',
  DeleteTodoFail    = '[Todo/API] Delete Fail'
}

/**
 * Load
 */
export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
  constructor(public payload: { offset?: number; limit?: number } = {}) {}
}

/**
 * Load success
 */
export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;
  constructor(public payload: { todos: Todo[] }) {}
}

/**
 * Load fail
 */
export class LoadTodosFail implements Action {
  readonly type = TodoActionTypes.LoadTodosFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Create
 */
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: { todo: Todo }) {}
}

/**
 * Create success
 */
export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: { todo: Todo }) {}
}

/**
 * Create fail
 */
export class CreateTodoFail implements Action {
  readonly type = TodoActionTypes.CreateTodoFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Update
 */
export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  constructor(public payload: { todo: Update<Todo> }) {}
}

/**
 * Update success
 */
export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;
  constructor(public payload: { todo: Update<Todo> }) {}
}

/**
 * Update fail
 */
export class UpdateTodoFail implements Action {
  readonly type = TodoActionTypes.UpdateTodoFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Delete
 */
export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;
  constructor(public payload: { id: string }) {}
}

/**
 * Delete success
 */
export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;
  constructor(public payload?: { id: string }) {}
}

/**
 * Delete fail
 */
export class DeleteTodoFail implements Action {
  readonly type = TodoActionTypes.DeleteTodoFail;
  constructor(public payload?: { error: any }) {}
}

export type TodoActions =
  | LoadTodos
  | LoadTodosSuccess
  | LoadTodosFail
  | CreateTodo
  | CreateTodoSuccess
  | CreateTodoFail
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFail
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFail;
