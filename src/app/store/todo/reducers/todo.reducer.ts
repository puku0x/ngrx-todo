import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Todo } from '@app/models';
import { TodoActionTypes, TodoActions } from '../actions';

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
    case TodoActionTypes.LoadTodos: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.LoadTodosSuccess: {
      const { todos } = action.payload;
      return adapter.addAll(todos, { ...state, loading: false });
    }
    case TodoActionTypes.LoadTodosFail: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.CreateTodo: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.CreateTodoSuccess: {
      const { todo } = action.payload;
      return adapter.addOne(todo, { ...state, loading: false });
    }
    case TodoActionTypes.CreateTodoFail: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.UpdateTodo: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.UpdateTodoSuccess: {
      const { todo } = action.payload;
      return adapter.updateOne(todo, {
        ...state,
        loading: false
      });
    }
    case TodoActionTypes.UpdateTodoFail: {
      return { ...state, loading: false };
    }
    case TodoActionTypes.DeleteTodo: {
      return { ...state, loading: true };
    }
    case TodoActionTypes.DeleteTodoSuccess: {
      const { id } = action.payload;
      return adapter.removeOne(id, { ...state, loading: false });
    }
    case TodoActionTypes.DeleteTodoFail: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}
