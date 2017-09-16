import * as TodoAction from '../actions/todo.action';
import * as fromTodo from './todo.reducer';
import { Todo } from '../interfaces';

describe('fromTodos', () => {
  it('should return the initial state', () => {
    expect(fromTodo.reducer(undefined, {type: null})).toEqual(fromTodo.initialState)
  });

  it('should handle FIND_ALL', () => {
    const initialState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const expectedState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindAll();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_ALL_SUCCESS', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const todos = [new Todo(1, 'test1'), new Todo(2, 'test2')];
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [...todos]
    };
    const action = new TodoAction.FindAllSuccess(todos);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_ALL_FAILED', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const action = new TodoAction.FindAllFailed();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND', () => {
    const initialState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: fromTodo.State = {
      loading: true,
      todo: initialState.todos[0],
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Find(initialState.todos[0].id);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_SUCCESS', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo = Object.assign({}, initialState.todos[0]);
    const expectedState: fromTodo.State = {
      loading: false,
      todo: todo,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindSuccess(todo);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_FAILED', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo = Object.assign({}, initialState.todos[0]);
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindFailed();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE', () => {
    const initialState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const todo = new Todo(1, 'test');
    const expectedState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Create(todo);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_SUCCESS', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const todo = new Todo(1, 'test');
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [todo]
    };
    const action = new TodoAction.CreateSuccess(todo);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_FAILED', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.CreateFailed();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE', () => {
    const initialState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    }
    const expectedState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Update(todo);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SUCCESS', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    }
    const expectedState: fromTodo.State = {
      loading: false,
      todo: todo,
      todos: [todo]
    };
    const action = new TodoAction.UpdateSuccess(todo);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_FAILED', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    };
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.UpdateFailed();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE', () => {
    const initialState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Delete(initialState.todos[0].id);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_SUCCESS', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const action = new TodoAction.DeleteSuccess(initialState.todos[0].id);
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_FAILED', () => {
    const initialState: fromTodo.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: fromTodo.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.DeleteFailed();
    expect(fromTodo.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle selectors', () => {
    const state = {
      todo: {
        loading: true,
        todo: new Todo(1, 'test1'),
        todos: [new Todo(1, 'test1'), new Todo(2, 'test1'), new Todo(2, 'test3')]
      }
    };
    expect(fromTodo.getLoading(state)).toEqual(state.todo.loading);
    expect(fromTodo.getTodo(state)).toEqual(state.todo.todo);
    expect(fromTodo.getTodos(state)).toEqual(state.todo.todos);
  });

});
