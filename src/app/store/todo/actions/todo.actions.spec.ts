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

describe('TodoActions', () => {
  it('should create loadTodos', () => {
    const expectedAction = {
      type: loadTodos.type,
      payload: { offset: 0, limit: 100 }
    };
    const action = loadTodos(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create loadTodosSuccess', () => {
    const expectedAction = {
      type: loadTodosSuccess.type,
      payload: {
        todos: [
          new Todo('1', 'test1'),
          new Todo('2', 'test2'),
          new Todo('3', 'test3')
        ]
      }
    };
    const action = loadTodosSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create loadTodosFailure', () => {
    const expectedAction = {
      type: loadTodosFailure.type,
      payload: {
        error: 'error'
      }
    };
    const action = loadTodosFailure(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create createTodo', () => {
    const expectedAction = {
      type: createTodo.type,
      payload: {
        todo: new Todo(null, 'test')
      }
    };
    const action = createTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create createTodoSuccess', () => {
    const expectedAction = {
      type: createTodoSuccess.type,
      payload: {
        todo: new Todo('1', 'test')
      }
    };
    const action = createTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create createTodoFailure', () => {
    const expectedAction = {
      type: createTodoFailure.type,
      payload: {
        error: 'error'
      }
    };
    const action = createTodoFailure(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create updateTodo', () => {
    const expectedAction = {
      type: updateTodo.type,
      payload: {
        todo: {
          id: '1',
          changes: new Todo('1', 'test')
        }
      }
    };
    const action = updateTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create updateTodoSuccess', () => {
    const expectedAction = {
      type: updateTodoSuccess.type,
      payload: {
        todo: {
          id: '1',
          changes: new Todo('1', 'test')
        }
      }
    };
    const action = updateTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create updateTodoFailure', () => {
    const expectedAction = {
      type: updateTodoFailure.type,
      payload: {
        error: 'error'
      }
    };
    const action = updateTodoFailure(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create deleteTodo', () => {
    const expectedAction = {
      type: deleteTodo.type,
      payload: { id: '1' }
    };
    const action = deleteTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create deleteTodoSuccess', () => {
    const expectedAction = {
      type: deleteTodoSuccess.type,
      payload: {
        id: '1'
      }
    };
    const action = deleteTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create deleteTodoFailure', () => {
    const expectedAction = {
      type: deleteTodoFailure.type,
      payload: {
        error: 'error'
      }
    };
    const action = deleteTodoFailure(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
});
