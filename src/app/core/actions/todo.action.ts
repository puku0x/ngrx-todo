import { Action } from '@ngrx/store';
import { Page, Todo } from '../../interfaces';

export const FIND_ALL = 'FIND_ALL';
export const FIND_ALL_SUCCESS = 'FIND_ALL_SUCCESS';

/**
 * アクション
 */
export class FindAll implements Action {
  readonly type = FIND_ALL;
  constructor(public payload?: any) {}
}

/**
 * アクション（成功時）
 */
export class FindAllSuccess implements Action {
  readonly type = FIND_ALL_SUCCESS;
  constructor(public payload?: Page<Todo>) {}
}

export type Actions = FindAll | FindAllSuccess;
