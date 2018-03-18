import { Todo } from '../models';
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
  DeleteTodoFail,
} from '../actions';

describe('TodoActions', () => {
  it('should create an action to load todos', () => {
    const expectedAction = {
      type: TodoActionTypes.LoadTodos,
      payload: { offset: 0, limit: 100 }
    };
    const action = new LoadTodos(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to create todo', () => {
    const todo = new Todo(1, 'test');
    const expectedAction = {
      type: TodoActionTypes.CreateTodo,
      payload: { todo }
    };
    const action = new CreateTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to update todo', () => {
    const todo = new Todo(1, 'testtest');
    const expectedAction = {
      type: TodoActionTypes.UpdateTodo,
      payload: {
        todo: {
          id: todo.id,
          changes: todo
        }
       }
    };
    const action = new UpdateTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to delete todo', () => {
    const expectedAction = {
      type: TodoActionTypes.DeleteTodo,
      payload: { id: 1}
    };
    const action = new DeleteTodo(expectedAction.payload);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
});
