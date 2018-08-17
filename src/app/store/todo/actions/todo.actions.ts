import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '@app/models';

export enum TodoActionTypes {
  LoadTodos         = '[Todo] Load',
  LoadTodosSuccess  = '[Todo] Load Success',
  LoadTodosFail     = '[Todo] Load Fail',
  CreateTodo        = '[Todo] Create',
  CreateTodoSuccess = '[Todo] Create Success',
  CreateTodoFail    = '[Todo] Create Fail',
  UpdateTodo        = '[Todo] Update',
  UpdateTodoSuccess = '[Todo] Update Success',
  UpdateTodoFail    = '[Todo] Update Fail',
  DeleteTodo        = '[Todo] Delete',
  DeleteTodoSuccess = '[Todo] Delete Success',
  DeleteTodoFail    = '[Todo] Delete Fail',
}

/**
 * Load todos
 */
export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
  constructor(public payload?: { offset: number, limit: number }) {
    this.payload = payload || { offset: 0, limit: 100 };
  }
}

/**
 * Load todos success
 */
export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;
  constructor(public payload: { todos: Todo[] }) {}
}

/**
 * Load todos fail
 */
export class LoadTodosFail implements Action {
  readonly type = TodoActionTypes.LoadTodosFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Create todo
 */
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: { todo: Todo } ) {}
}

/**
 * Create todo success
 */
export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: { todo: Todo }) {}
}

/**
 * Create todo fail
 */
export class CreateTodoFail implements Action {
  readonly type = TodoActionTypes.CreateTodoFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Update todo
 */
export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  constructor(public payload: { todo: Update<Todo> }) {}
}

/**
 * Update todo success
 */
export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;
  constructor(public payload: { todo: Update<Todo> }) {}
}

/**
 * Update todo fail
 */
export class UpdateTodoFail implements Action {
  readonly type = TodoActionTypes.UpdateTodoFail;
  constructor(public payload?: { error: any }) {}
}

/**
 * Delete todo
 */
export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;
  constructor(public payload: { id: string }) {}
}

/**
 * Delete todo success
 */
export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DeleteTodoSuccess;
  constructor(public payload?: { id: string }) {}
}

/**
 * Delete todo fail
 */
export class DeleteTodoFail implements Action {
  readonly type = TodoActionTypes.DeleteTodoFail;
  constructor(public payload?: { error: any }) {}
}

export type TodoAction =
   LoadTodos
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
