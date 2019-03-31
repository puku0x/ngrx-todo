import { Todo } from '@app/models';
import {
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
import { reducer, initialState, State } from './todo.reducer';

describe('TodoReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('TodoAction', () => {
    it('should handle loadTodos', () => {
      const state: State = {
        ...initialState
      };
      const expected: State = {
        ...state,
        loading: true
      };
      const action = loadTodos();
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle loadTodosSuccess', () => {
      const todos = [
        new Todo('1', 'todo1'),
        new Todo('2', 'todo2'),
        new Todo('3', 'todo3')
      ];
      const state: State = {
        ...initialState,
        loading: true
      };
      const expected: State = {
        ...state,
        loading: false,
        ids: ['1', '2', '3'],
        entities: {
          1: todos[0],
          2: todos[1],
          3: todos[2]
        }
      };
      const action = loadTodosSuccess({ todos });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle loadTodosFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true
      };
      const expected: State = {
        ...state,
        loading: false
      };
      const action = loadTodosFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle createTodo', () => {
      const todo = new Todo('1', 'todo1');
      const state: State = {
        ...initialState,
        loading: false
      };
      const expected: State = {
        ...state,
        loading: true
      };
      const action = createTodo({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle createTodoSuccess', () => {
      const todo = new Todo('1', 'todo1');
      const state: State = {
        ...initialState,
        loading: true
      };
      const expected: State = {
        ...state,
        loading: false,
        ids: ['1'],
        entities: {
          1: todo
        }
      };
      const action = createTodoSuccess({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle createTodoFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true
      };
      const expected: State = {
        ...state,
        loading: false
      };
      const action = createTodoFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle updateTodo', () => {
      const state: State = {
        ...initialState,
        ids: ['1'],
        entities: {
          1: new Todo('1', 'todo1')
        }
      };
      const expected: State = {
        ...state,
        loading: true
      };
      const action = updateTodo({
        todo: {
          id: '1',
          changes: {
            id: '1',
            text: 'todo2'
          }
        }
      });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle updateTodoSuccess', () => {
      const state: State = {
        ...initialState,
        loading: true,
        ids: ['1'],
        entities: {
          1: {
            id: '1',
            text: 'todo',
            checked: false,
            createdAt: 1000,
            updatedAt: 2000
          }
        }
      };
      const expected: State = {
        ...state,
        loading: false,
        ids: ['1'],
        entities: {
          1: {
            id: '1',
            text: 'todo1_update',
            checked: false,
            createdAt: 1000,
            updatedAt: 3000
          }
        }
      };
      const action = updateTodoSuccess({
        todo: {
          id: '1',
          changes: new Todo('1', 'todo1_update', false, 1000, 3000)
        }
      });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle updateTodoFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true
      };
      const expected: State = {
        ...state,
        loading: false
      };
      const action = updateTodoFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle deleteTodo', () => {
      const state: State = {
        ...initialState,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1')
        }
      };
      const expected: State = {
        ...state,
        loading: true
      };
      const action = deleteTodo({ id: '1' });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle deleteTodoSuccess', () => {
      const state: State = {
        ...initialState,
        loading: true,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1')
        }
      };
      const expected: State = {
        ...state,
        loading: false,
        ids: [],
        entities: {}
      };
      const action = deleteTodoSuccess({ id: '1' });
      expect(reducer(state, action)).toEqual(expected);
    });
    it('should handle deleteTodoFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1')
        }
      };
      const expected: State = {
        ...state,
        loading: false
      };
      const action = deleteTodoFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });
  });
});
