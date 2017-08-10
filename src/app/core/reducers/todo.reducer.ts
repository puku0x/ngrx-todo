import { Action, createSelector, createFeatureSelector } from '@ngrx/store';
import * as TodoAction from '../actions/todo.action';
import { Page, Todo } from '../../interfaces';

/**
 * 状態
 */
export interface State {
  todos: Todo[];
  todo: Todo;
}

/**
 * 初期状態
 */
export const initialState = {
  todos: [],
  todo: null,
};

/**
 * リデューサ
 * @param state
 * @param action
 */
export function todoReducer(state = initialState, action: TodoAction.Actions): State {

  switch (action.type) {
    case TodoAction.FIND_ALL_SUCCESS: {
      return Object.assign({}, state, { todos: action.payload });
    }
    case TodoAction.FIND_SUCCESS: {
      return Object.assign({}, state, { todo: action.payload });
    }
    case TodoAction.CREATE_SUCCESS: {
      return Object.assign({}, state, { todos: [...state.todos, action.payload] });
    }
    case TodoAction.UPDATE_SUCCESS: {
      const index = state.todos.map(todo => todo.id).indexOf(action.payload.id);
      const newTodos = [...state.todos.slice(0, index), action.payload, ...state.todos.slice(index + 1)];
      return Object.assign({}, state, { todos: newTodos　});
    }
    case TodoAction.DELETE_SUCCESS: {
      return Object.assign({}, state, { todos: state.todos.filter(todo => todo.id !== action.payload.id) });
    }
    default: {
      return state;
    }
  }
}

// セレクタ
export const getState = createFeatureSelector<State>('todo');
export const getTodos = createSelector(getState, (state: State) => state.todos);
export const getTodo = createSelector(getState, (state: State) => state.todo);
