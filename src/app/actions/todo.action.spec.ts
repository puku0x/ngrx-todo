import * as TodoAction from './todo.action';
import { Todo } from '../models';

describe('TodoActions', () => {
  it('should create an action to find all todos', () => {
    const expectedAction = {
      type: TodoAction.FIND_ALL,
      payload: { offset: 0, limit: 100 }
    }
    const action = new TodoAction.FindAll();
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to find a todo', () => {
    const expectedAction = {
      type: TodoAction.FIND,
      payload: 1
    }
    const action = new TodoAction.Find(1);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to create a todo', () => {
    const todo = new Todo(1, 'test');
    const expectedAction = {
      payload: todo,
      type: TodoAction.CREATE
    }
    const action = new TodoAction.Create(todo);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to update a todo', () => {
    const todo = new Todo(1, 'testtest');
    const expectedAction = {
      payload: todo,
      type: TodoAction.UPDATE
    }
    const action = new TodoAction.Update(todo);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('should create an action to delete a todo', () => {
    const expectedAction = {
      type: TodoAction.DELETE,
      payload: 1
    }
    const action = new TodoAction.Delete(1);
    expect(action.type).toEqual(expectedAction.type);
    expect(action.payload).toEqual(expectedAction.payload);
  });
});
