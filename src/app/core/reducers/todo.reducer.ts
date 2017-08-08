import { Action } from '@ngrx/store';
import * as TodoAction from '../actions/todo.action';
import { Page, Todo } from '../../interfaces';

/**
 * 状態
 */
export interface State {
  page: Page<Todo>;
  loading: boolean;
}

/**
 * 初期状態
 */
export const initialState = {
  page: null,
  loading: false,
};

/**
 * リデューサ
 * @param state
 * @param action
 */
export function todoReducer(state = initialState, action: TodoAction.Actions): State {
  switch (action.type) {
    case TodoAction.FIND_ALL: {
      return Object.assign({}, state, { loading: true });
    }
    case TodoAction.FIND_ALL_SUCCESS: {
      return Object.assign({}, state, { page: action.payload, loading: false });
    }
    default: {
      return state;
    }
  }
}
