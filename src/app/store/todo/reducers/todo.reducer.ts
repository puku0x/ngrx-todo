import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Todo } from '@app/models';
import {
  TodoActions,
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
} from '../actions';

/**
 * State ID
 */
export const STATE_ID = 'todo';

/**
 * State
 */
export interface State extends EntityState<Todo> {
  loading: boolean;
}

/**
 * Adapter
 */
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

/**
 * Initial state
 */
export const initialState: State = adapter.getInitialState({
  loading: false
});

/**
 * Reducer
 * @param state State
 * @param action Action
 */
export function reducer(state = initialState, action: TodoActions): State {
  switch (action.type) {
    case loadTodos.type: {
      return { ...state, loading: true };
    }
    case loadTodosSuccess.type: {
      const { todos } = action.payload;
      return adapter.addAll(todos, { ...state, loading: false });
    }
    case loadTodosFailure.type: {
      return { ...state, loading: false };
    }
    case createTodo.type: {
      return { ...state, loading: true };
    }
    case createTodoSuccess.type: {
      const { todo } = action.payload;
      return adapter.addOne(todo, { ...state, loading: false });
    }
    case createTodoFailure.type: {
      return { ...state, loading: false };
    }
    case updateTodo.type: {
      return { ...state, loading: true };
    }
    case updateTodoSuccess.type: {
      const { todo } = action.payload;
      return adapter.updateOne(todo, { ...state, loading: false });
    }
    case updateTodoFailure.type: {
      return { ...state, loading: false };
    }
    case deleteTodo.type: {
      return { ...state, loading: true };
    }
    case deleteTodoSuccess.type: {
      const { id } = action.payload;
      return adapter.removeOne(id, { ...state, loading: false });
    }
    case deleteTodoFailure.type: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}
