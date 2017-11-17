import { Action } from '@ngrx/store';

import { Todo } from '../models';

/**
 * Action names
 */
export const FIND_ALL         = '[Todo] Find All';
export const FIND_ALL_SUCCESS = '[Todo] Find All Success';
export const FIND_ALL_FAILURE = '[Todo] Find All Failure';
export const FIND             = '[Todo] Find';
export const FIND_SUCCESS     = '[Todo] Find Success';
export const FIND_FAILURE     = '[Todo] Find Failure';
export const CREATE           = '[Todo] Create';
export const CREATE_SUCCESS   = '[Todo] Create Success';
export const CREATE_FAILURE   = '[Todo] Create Failure';
export const UPDATE           = '[Todo] Update';
export const UPDATE_SUCCESS   = '[Todo] Update Success';
export const UPDATE_FAILURE   = '[Todo] Update Failure';
export const DELETE           = '[Todo] Delete';
export const DELETE_SUCCESS   = '[Todo] Delete Success';
export const DELETE_FAILURE   = '[Todo] Delete Failure';

/**
 * Find all
 */
export class FindAll implements Action {
  readonly type = FIND_ALL;
  constructor(public payload?: any) {
    this.payload = payload || { offset: 0, limit: 100 };
  }
}

/**
 * Find all success
 */
export class FindAllSuccess implements Action {
  readonly type = FIND_ALL_SUCCESS;
  constructor(public payload: Todo[]) {}
}

/**
 * Find all failed
 */
export class FindAllFailure implements Action {
  readonly type = FIND_ALL_FAILURE;
  constructor(public payload?: any) {}
}

/**
 * Find
 */
export class Find implements Action {
  readonly type = FIND;
  constructor(public payload: number) {}
}

/**
 * Find success
 */
export class FindSuccess implements Action {
  readonly type = FIND_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * Find failed
 */
export class FindFailure implements Action {
  readonly type = FIND_FAILURE;
  constructor(public payload?: any) {}
}

/**
 * Create
 */
export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: Todo) {}
}

/**
 * Create success
 */
export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * Create failed
 */
export class CreateFailure implements Action {
  readonly type = CREATE_FAILURE;
  constructor(public payload?: any) {}
}

/**
 * Update
 */
export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload: Todo) {}
}

/**
 * Update success
 */
export class UpdateSuccess implements Action {
  readonly type = UPDATE_SUCCESS;
  constructor(public payload: Todo) {}
}

/**
 * Update failed
 */
export class UpdateFailure implements Action {
  readonly type = UPDATE_FAILURE;
  constructor(public payload?: any) {}
}

/**
 * Delete
 */
export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: number) {}
}

/**
 * Delete success
 */
export class DeleteSuccess implements Action {
  readonly type = DELETE_SUCCESS;
  constructor(public payload?: any) {}
}

/**
 * Delete failed
 */
export class DeleteFailure implements Action {
  readonly type = DELETE_FAILURE;
  constructor(public payload?: any) {}
}

/**
 * Actions
 */
export type Actions =
  FindAll | FindAllSuccess | FindAllFailure |
  Find    | FindSuccess    | FindFailure    |
  Create  | CreateSuccess  | CreateFailure  |
  Update  | UpdateSuccess  | UpdateFailure  |
  Delete  | DeleteSuccess  | DeleteFailure;
