import * as TodoActions from '../actions';
import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';
import { State, initialState, adapter ,reducer } from './todo.reducer';

describe('TodoReducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('TodoActions', () => {
    it('should handle loadAll', () => {
      const state: State = {
        ...initialState,
      };
      const expected: State = {
        ...state,
        loading: true,
      };
      const action = TodoActions.loadAll({ offset: 0, limit: 100 });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle loadAllSuccess', () => {
      const todos: Todo[] = [
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '2',
          title: 'test2',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '3',
          title: 'test3',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
      ];
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = adapter.setAll(todos, {
        ...state,
        loading: false,
      });
      const action = TodoActions.loadAllSuccess({ todos });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle loadAllFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = {
        ...state,
        loading: false,
        error,
      };
      const action = TodoActions.loadAllFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle load', () => {
      const id = '1';
      const state: State = {
        ...initialState,
        loading: false,
      };
      const expected: State = {
        ...state,
        loading: true,
        selectedId: id,
      };
      const action = TodoActions.load({ id });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle loadSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const state: State = {
        ...initialState,
        loading: true,
        selectedId: todo.id,
      };
      const expected: State = adapter.upsertOne(todo, {
        ...state,
        loading: false,
      });
      const action = TodoActions.loadSuccess({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle loadFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = {
        ...state,
        loading: false,
        error,
      };
      const action = TodoActions.loadFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle create', () => {
      const todo: TodoCreateDto = {
        title: 'test1',
      };
      const state: State = {
        ...initialState,
        loading: false,
      };
      const expected: State = {
        ...state,
        loading: true,
      };
      const action = TodoActions.create({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle createSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = adapter.addOne(todo, {
        ...state,
        loading: false,
      });
      const action = TodoActions.createSuccess({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle createFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = {
        ...state,
        loading: false,
        error,
      };
      const action = TodoActions.createFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle update', () => {
      const todo: TodoUpdateDto = {
        id: '1',
        title: 'test1',
        completed: true,
      };
      const state: State = adapter.addOne(
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        { ...initialState }
      );
      const expected: State = {
        ...state,
        loading: true,
      };
      const action = TodoActions.update({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle updateSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1a',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const state: State = adapter.addOne(
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        { ...initialState, loading: true }
      );
      const expected: State = adapter.updateOne(
        { id: todo.id, changes: todo },
        { ...state, loading: false }
      );
      const action = TodoActions.updateSuccess({ todo });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle updateFailure', () => {
      const error = 'error';
      const state: State = {
        ...initialState,
        loading: true,
      };
      const expected: State = {
        ...state,
        loading: false,
        error,
      };
      const action = TodoActions.updateFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle remove', () => {
      const id = '2';
      const todos: Todo[] = [
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '2',
          title: 'test2',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '3',
          title: 'test3',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
      ];
      const state: State = adapter.setAll(todos, { ...initialState });
      const expected: State = {
        ...state,
        loading: true,
      };
      const action = TodoActions.remove({ id });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle removeSuccess', () => {
      const id = '2';
      const todos: Todo[] = [
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '2',
          title: 'test2',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '3',
          title: 'test3',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
      ];
      const state: State = adapter.setAll(todos, {
        ...initialState,
        loading: false,
      });
      const expected: State = adapter.removeOne(id, { ...state });
      const action = TodoActions.removeSuccess({ id });
      expect(reducer(state, action)).toEqual(expected);
    });

    it('should handle deleteTodoFailure', () => {
      const todos: Todo[] = [
        {
          id: '1',
          title: 'test1',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '2',
          title: 'test2',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
        {
          id: '3',
          title: 'test3',
          completed: true,
          createdAt: 1000000,
          updatedAt: 2000000,
        },
      ];
      const error = 'error';
      const state: State = adapter.setAll(todos, {
        ...initialState,
        loading: true,
      });
      const expected: State = {
        ...state,
        loading: false,
        error,
      };
      const action = TodoActions.removeFailure({ error });
      expect(reducer(state, action)).toEqual(expected);
    });
  });
});
