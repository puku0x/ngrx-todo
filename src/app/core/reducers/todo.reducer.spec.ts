import * as TodoReducer from './todo.reducer';
import * as TodoAction from '../actions/todo.action';
import { Todo } from '../../interfaces';

describe('TodoReducers', () => {
  it('should return the initial state', () => {
    expect(TodoReducer.reducer(undefined, {type: null})).toEqual(TodoReducer.initialState)
  });

  it('should handle FIND_ALL', () => {
    const initialState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const expectedState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindAll();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_ALL_SUCCESS', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const todos = [new Todo(1, 'test1'), new Todo(2, 'test2')];
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [...todos]
    };
    const action = new TodoAction.FindAllSuccess(todos);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_ALL_FAILED', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const action = new TodoAction.FindAllFailed();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND', () => {
    const initialState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: TodoReducer.State = {
      loading: true,
      todo: initialState.todos[0],
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Find(initialState.todos[0].id);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_SUCCESS', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo = Object.assign({}, initialState.todos[0]);
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: todo,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindSuccess(todo);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FIND_FAILED', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo = Object.assign({}, initialState.todos[0]);
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.FindFailed();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE', () => {
    const initialState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const todo = new Todo(1, 'test');
    const expectedState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Create(todo);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_SUCCESS', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const todo = new Todo(1, 'test');
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [todo]
    };
    const action = new TodoAction.CreateSuccess(todo);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_FAILED', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: []
    };
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.CreateFailed();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE', () => {
    const initialState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    }
    const expectedState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Update(todo);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_SUCCESS', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    }
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: todo,
      todos: [todo]
    };
    const action = new TodoAction.UpdateSuccess(todo);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_FAILED', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const todo: Todo = {
      id: initialState.todos[0].id,
      content: 'test2',
    };
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.UpdateFailed();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE', () => {
    const initialState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.Delete(initialState.todos[0].id);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_SUCCESS', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: []
    };
    const action = new TodoAction.DeleteSuccess(initialState.todos[0].id);
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_FAILED', () => {
    const initialState: TodoReducer.State = {
      loading: true,
      todo: null,
      todos: [new Todo(1, 'test1')]
    };
    const expectedState: TodoReducer.State = {
      loading: false,
      todo: null,
      todos: [...initialState.todos]
    };
    const action = new TodoAction.DeleteFailed();
    expect(TodoReducer.reducer(initialState, action)).toEqual(expectedState);
  });
});
