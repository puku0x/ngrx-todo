import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { Todo } from '@app/models';
import { TodoService } from '@app/services';
import { TodoEffects } from './todo.effect';
import {
  TodoActions,
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

describe('TodoEffects', () => {
  let actions$: Observable<TodoActions>;
  let effects: TodoEffects;
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        {
          provide: TodoService,
          useValue: jasmine.createSpyObj('TodoService', [
            'findAll',
            'create',
            'update',
            'delete'
          ])
        }
      ]
    });
    effects = TestBed.get(TodoEffects);
    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadTodos$', () => {
    it('should return loadTodosSuccess', () => {
      const todos = [
        new Todo('1', 'test1'),
        new Todo('2', 'test2'),
        new Todo('3', 'test3')
      ];
      const action = loadTodos();
      const completion = loadTodosSuccess({ todos });

      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: todos });
      const expected = cold('--c', { c: completion });
      service.findAll = () => response;

      expect(effects.loadTodos$).toBeObservable(expected);
    });

    it('should return loadTodosFailure', () => {
      const error = 'error';
      const action = loadTodos();
      const completion = loadTodosFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      service.findAll = () => response;

      expect(effects.loadTodos$).toBeObservable(expected);
    });
  });

  describe('createTodo$', () => {
    it('should return createTodoSuccess', () => {
      const todo = new Todo('1', 'todo1');
      const action = createTodo({ todo });
      const completion = createTodoSuccess({ todo });

      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: todo });
      const expected = cold('--c', { c: completion });
      service.create = () => response;

      expect(effects.createTodo$).toBeObservable(expected);
    });

    it('should return createTodoFailure', () => {
      const error = 'error';
      const action = createTodo({ todo: new Todo('1', 'todo1') });
      const completion = createTodoFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      service.create = () => response;

      expect(effects.createTodo$).toBeObservable(expected);
    });
  });

  describe('updateTodo$', () => {
    it('should return updateTodoSuccess', () => {
      const todo = new Todo('1', 'todo1');
      const action = updateTodo({ todo: { id: '1', changes: todo } });
      const completion = updateTodoSuccess({
        todo: { id: '1', changes: todo }
      });

      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: todo });
      const expected = cold('--c', { c: completion });
      service.update = () => response;

      expect(effects.updateTodo$).toBeObservable(expected);
    });

    it('should return updateTodoFailure', () => {
      const error = 'error';
      const action = updateTodo({
        todo: { id: 1, changes: new Todo('1', 'todo1') }
      });
      const completion = updateTodoFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      service.update = () => response;

      expect(effects.updateTodo$).toBeObservable(expected);
    });
  });

  describe('deleteTodo$', () => {
    it('should return deleteTodoSuccess', () => {
      const id = '1';
      const action = deleteTodo({ id });
      const completion = deleteTodoSuccess({ id });

      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: id });
      const expected = cold('--c', { c: completion });
      service.delete = () => response;

      expect(effects.deleteTodo$).toBeObservable(expected);
    });

    it('should return deleteTodoFailure', () => {
      const error = 'error';
      const action = deleteTodo({ id: '1' });
      const completion = deleteTodoFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      service.delete = () => response;

      expect(effects.deleteTodo$).toBeObservable(expected);
    });
  });
});
