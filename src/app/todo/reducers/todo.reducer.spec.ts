import { Todo } from '@app/models';
import {
  TodoActions,
  TodoActionTypes,
  LoadTodos,
  LoadTodosSuccess,
  LoadTodosFail,
  CreateTodo,
  CreateTodoSuccess,
  CreateTodoFail,
  UpdateTodo,
  UpdateTodoSuccess,
  UpdateTodoFail,
  DeleteTodo,
  DeleteTodoSuccess,
  DeleteTodoFail
} from '../actions';
import {
  reducer,
  initialState,
  State,
  getLoading
} from './todo.reducer';

describe('Todo Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Todo action', () => {
    it('should handle LoadTodos', () => {
      const initial: State = {
        loading: false,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: true,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new LoadTodos();
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle LoadTodosSuccess', () => {
      const todos = [
        new Todo('1', 'todo1'),
        new Todo('2', 'todo2'),
        new Todo('3', 'todo3'),
      ];
      const initial: State = {
        loading: true,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: false,
        ids: ['1', '2', '3'],
        entities: {
          '1': todos[0],
          '2': todos[1],
          '3': todos[2],
        }
      };
      const action = new LoadTodosSuccess({ todos });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle LoadTodosFail', () => {
      const initial: State = {
        loading: true,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: false,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new LoadTodosFail({ error: 'error' });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle CreateTodo', () => {
      const todo = new Todo('1', 'todo1');
      const initial: State = {
        loading: false,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: true,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new CreateTodo({ todo });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle CreateTodoSuccess', () => {
      const todo = new Todo('1', 'todo1');
      const initial: State = {
        loading: true,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: false,
        ids: ['1'],
        entities: {
          '1': todo
        }
      };
      const action = new CreateTodoSuccess({ todo });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle CreateTodoFail', () => {
      const initial: State = {
        loading: true,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: false,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new CreateTodoFail({ error: 'error' });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle UpdateTodo', () => {
      const initial: State = {
        loading: false,
        ids: ['1'],
        entities: {
          '1': new Todo('1', 'todo1'),
        }
      };
      const expected: State = {
        loading: true,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new UpdateTodo({
        todo: {
          id: '1',
          changes: {
            id: '1',
            text: 'todo2'
          }
        }
      });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle UpdateTodoSuccess', () => {
      const initial: State = {
        loading: true,
        ids: ['1'],
        entities: {
          '1': {
            id: '1',
            text: 'todo1',
            checked: false,
            createdAt: 1000,
            updatedAt: 2000
          }
        }
      };
      const expected: State = {
        loading: false,
        ids: ['1'],
        entities: {
          '1': {
            id: '1',
            text: 'todo2',
            checked: false,
            createdAt: 1000,
            updatedAt: 2000
          }
        }
      };
      const action = new UpdateTodoSuccess({
        todo: {
          id: '1',
          changes: new Todo('1', 'todo2', false, 1000, 2000)
        }
      });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle UpdateTodoFail', () => {
      const initial: State = {
        loading: true,
        ids: [],
        entities: {}
      };
      const expected: State = {
        loading: false,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new UpdateTodoFail({ error: 'error' });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle DeleteTodo', () => {
      const initial: State = {
        loading: false,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1'),
        }
      };
      const expected: State = {
        loading: true,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new DeleteTodo({ id: '1' });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle DeleteTodoSuccess', () => {
      const initial: State = {
        loading: true,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1'),
        }
      };
      const expected: State = {
        loading: false,
        ids: [],
        entities: {}
      };
      const action = new DeleteTodoSuccess({ id: '1' });
      expect(reducer(initial, action)).toEqual(expected);
    });

    it('should handle DeleteTodoFail', () => {
      const initial: State = {
        loading: true,
        ids: [1],
        entities: {
          1: new Todo('1', 'todo1')
        }
      };
      const expected: State = {
        loading: false,
        ids: initial.ids,
        entities: initial.entities
      };
      const action = new DeleteTodoFail({ error: 'error' });
      expect(reducer(initial, action)).toEqual(expected);
    });
  });

  describe('Selectors', () => {
    describe('getLoading', () => {
      it('should return loading', () => {
        const result = getLoading({
          ...initialState,
          loading: true,
        });

        expect(result).toEqual(true);
      });
    });
  });

});
