import { Action, createSelector, createFeatureSelector } from '@ngrx/store';

import * as TodoAction from '../actions/todo.action';
import { Page, Todo } from '../models';

/**
 * State
 */
export interface State {
  readonly loading: boolean;
  readonly todos: Todo[];
  readonly todo: Todo;
}

/**
 * Initial state
 */
export const initialState = {
  loading: false,
  todos: [],
  todo: null,
};

/**
 * Reducer
 * @param state
 * @param action
 */
export function reducer(state = initialState, action: TodoAction.Actions): State {
  switch (action.type) {
    case TodoAction.FIND_ALL: {
      return Object.assign({}, state, { loading: true });
    }
    case TodoAction.FIND_ALL_SUCCESS: {
      return Object.assign({}, state, { loading: false, todos: action.payload });
    }
    case TodoAction.FIND_ALL_FAILURE: {
      return Object.assign({}, state, { loading: false });
    }
    case TodoAction.FIND: {
      return Object.assign({}, state, { loading: true, todo: state.todos.find(todo => todo.id === action.payload) });
    }
    case TodoAction.FIND_SUCCESS: {
      return Object.assign({}, state, { loading: false, todo: action.payload });
    }
    case TodoAction.FIND_FAILURE: {
      return Object.assign({}, state, { loading: false });
    }
    case TodoAction.CREATE: {
      return Object.assign({}, state, { loading: true });
    }
    case TodoAction.CREATE_SUCCESS: {
      return Object.assign({}, state, { loading: false, todos: [...state.todos, action.payload] });
    }
    case TodoAction.CREATE_FAILURE: {
      return Object.assign({}, state, { loading: false });
    }
    case TodoAction.UPDATE: {
      return Object.assign({}, state, { loading: true });
    }
    case TodoAction.UPDATE_SUCCESS: {
      const index = state.todos.map(todo => todo.id).indexOf(action.payload.id);
      const newTodos = index < 0 ? state.todos : [...state.todos.slice(0, index), action.payload, ...state.todos.slice(index + 1)];
      return Object.assign({}, state, { loading: false, todos: newTodos, todo: action.payload　});
    }
    case TodoAction.UPDATE_FAILURE: {
      return Object.assign({}, state, { loading: false });
    }
    case TodoAction.DELETE: {
      return Object.assign({}, state, { loading: true });
    }
    case TodoAction.DELETE_SUCCESS: {
      return Object.assign({}, state, { loading: false, todos: state.todos.filter(todo => todo.id !== action.payload) });
    }
    case TodoAction.DELETE_FAILURE: {
      return Object.assign({}, state, { loading: false });
    }
    default: {
      return state;
    }
  }
}

/**
 * Selectors
 */
export const getState = createFeatureSelector<State>('todo');
export const getLoading = createSelector(getState, (state: State) => state.loading);
export const getTodo = createSelector(getState, (state: State) => state.todo);
export const getTodos = createSelector(getState, (state: State) => state.todos);
