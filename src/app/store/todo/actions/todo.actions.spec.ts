import { Todo } from '@app/models';
import {
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

describe('TodoActions', () => {
  it('should create LoadTodos', () => {
    const expectedAction = {
      type: TodoActionTypes.LoadTodos,
      payload: { offset: 0, limit: 100 }
    };
    const action = new LoadTodos(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create LoadTodosSuccess', () => {
    const expectedAction = {
      type: TodoActionTypes.LoadTodosSuccess,
      payload: {
        todos: [
          new Todo('1', 'test1'),
          new Todo('2', 'test2'),
          new Todo('3', 'test3')
        ]
      }
    };
    const action = new LoadTodosSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create LoadTodosFail', () => {
    const expectedAction = {
      type: TodoActionTypes.LoadTodosFail,
      payload: {
        error: 'error'
      }
    };
    const action = new LoadTodosFail(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create CreateTodo', () => {
    const expectedAction = {
      type: TodoActionTypes.CreateTodo,
      payload: {
        todo: new Todo(null, 'test')
      }
    };
    const action = new CreateTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create CreateTodoSuccess', () => {
    const expectedAction = {
      type: TodoActionTypes.CreateTodoSuccess,
      payload: {
        todo: new Todo('1', 'test')
      }
    };
    const action = new CreateTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create CreateTodoFail', () => {
    const expectedAction = {
      type: TodoActionTypes.CreateTodoFail,
      payload: {
        error: 'error'
      }
    };
    const action = new CreateTodoFail(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create UpdateTodo', () => {
    const expectedAction = {
      type: TodoActionTypes.UpdateTodo,
      payload: {
        todo: {
          id: '1',
          changes: new Todo('1', 'test')
        }
      }
    };
    const action = new UpdateTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create UpdateTodoSuccess', () => {
    const expectedAction = {
      type: TodoActionTypes.UpdateTodoSuccess,
      payload: {
        todo: {
          id: '1',
          changes: new Todo('1', 'test')
        }
      }
    };
    const action = new UpdateTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create UpdateTodoFail', () => {
    const expectedAction = {
      type: TodoActionTypes.UpdateTodoFail,
      payload: {
        error: 'error'
      }
    };
    const action = new UpdateTodoFail(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create DeleteTodo', () => {
    const expectedAction = {
      type: TodoActionTypes.DeleteTodo,
      payload: { id: '1' }
    };
    const action = new DeleteTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
  it('should create DeleteTodoSuccess', () => {
    const expectedAction = {
      type: TodoActionTypes.DeleteTodoSuccess,
      payload: {
        id: '1'
      }
    };
    const action = new DeleteTodoSuccess(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create DeleteTodoFail', () => {
    const expectedAction = {
      type: TodoActionTypes.DeleteTodoFail,
      payload: {
        error: 'error'
      }
    };
    const action = new DeleteTodoFail(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
});
