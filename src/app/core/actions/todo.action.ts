import { Action } from '@ngrx/store';
import { Todo } from '../../interfaces';

// アクション名
export const FIND_ALL         = 'TODO_ACTION_FIND_ALL';
export const FIND_ALL_SUCCESS = 'TODO_ACTION_FIND_ALL_SUCCESS';
export const FIND             = 'TODO_ACTION_FIND';
export const FIND_SUCCESS     = 'TODO_ACTION_FIND_SUCCESS';
export const CREATE           = 'TODO_ACTION_CREATE';
export const CREATE_SUCCESS   = 'TODO_ACTION_CREATE_SUCCESS';
export const UPDATE           = 'TODO_ACTION_UPDATE';
export const UPDATE_SUCCESS   = 'TODO_ACTION_UPDATE_SUCCESS';
export const DELETE           = 'TODO_ACTION_DELETE';
export const DELETE_SUCCESS   = 'TODO_ACTION_DELETE_SUCCESS';

/**
 * 一覧取得
 */
export class FindAll implements Action {
  readonly type = FIND_ALL;
  constructor() {}
}

/**
 * 一覧取得成功
 */
export class FindAllSuccess implements Action {
  readonly type = FIND_ALL_SUCCESS;
  constructor(public payload: Todo[]) {}
}

/**
 * 一件取得
 */
export class Find implements Action {
  readonly type = FIND;
  constructor(public payload: Todo) {}
}

/**
 * 一件取得成功
 */
export class FindSuccess implements Action {
  readonly type = FIND_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * 登録
 */
export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Todo) {}
}

/**
 * 登録成功
 */
export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * 更新
 */
export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Todo) {}
}

/**
 * 更新成功
 */
export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * 削除
 */
export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: Todo) {}
}

/**
 * 削除成功
 */
export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * アクション
 */
export type Actions =
  FindAll | FindAllSuccess |
  Find    | FindSuccess    |
  Create  | CreateSuccess  |
  Update  | UpdateSuccess  |
  Delete  | DeleteSuccess;
