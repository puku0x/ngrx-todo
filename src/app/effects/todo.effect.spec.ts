import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Rx';
import { hot, cold } from 'jasmine-marbles';

import { TodoEffects } from './todo.effect';
import * as TodoAction from '../actions/todo.action';
import { TodoService } from '../core/services/todo.service';
import { Page, Todo } from '../interfaces';

describe('TodoEffects', () => {
  let effects: TodoEffects;
  let actions: Observable<any>;
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions),
        {
          provide: TodoService,
          useValue: jasmine.createSpyObj('TodoService', ['findAll', 'find', 'create', 'update', 'delete']),
        }
      ],
    });
    effects = TestBed.get(TodoEffects);
    service = TestBed.get(TodoService);
  });

  it('should return a new TodoAction.FindAllSuccess', () => {
    const response: Page<Todo> = {
      content: [new Todo(1, 'test1'), new Todo(2, 'test2'), new Todo(3, 'test3') ],
      last: false,
      first: true,
      number: 0,
      numberOfElements: 3,
      size: 100,
      sort: null,
      totalElements: 3,
      totalPages: 1
    }
    service.findAll.and.returnValue(Observable.of(response));
    actions = hot('--a-', { a: new TodoAction.FindAll() });
    const expected = cold('--b', { b: new TodoAction.FindAllSuccess(response.content) });
    expect(effects.findAll$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindAllFailed', () => {
    service.findAll.and.returnValue(Observable.throw({}));
    actions = hot('--a-', { a: new TodoAction.FindAll() });
    const expected = cold('--b', { b: new TodoAction.FindAllFailed({}) });
    expect(effects.findAll$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindSuccess', () => {
    const response = new Todo(1, 'test1');
    service.find.and.returnValue(Observable.of(response));
    actions = hot('--a-', { a: new TodoAction.Find(1) });
    const expected = cold('--b', { b: new TodoAction.FindSuccess(response) });
    expect(effects.find$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindFailed', () => {
    service.find.and.returnValue(Observable.throw({}));
    actions = hot('--a-', { a: new TodoAction.Find(1) });
    const expected = cold('--b', { b: new TodoAction.FindFailed({}) });
    expect(effects.find$).toBeObservable(expected);
  });

  it('should return a new TodoAction.CreateSuccess', () => {
    const response = new Todo(1, 'test1');
    service.create.and.returnValue(Observable.of(response));
    actions = hot('--a-', { a: new TodoAction.Create(new Todo(null, 'test1')) });
    const expected = cold('--b', { b: new TodoAction.CreateSuccess(response) });
    expect(effects.create$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindAll, on TodoAction.CreateSuccess', () => {
    actions = hot('--a-', { a: new TodoAction.CreateSuccess({}) });
    const expected = cold('--d', { d: new TodoAction.FindAll() });
    expect(effects.createSuccess$).toBeObservable(expected);
  });

  it('should return a new TodoAction.CreateFailed', () => {
    service.create.and.returnValue(Observable.throw({}));
    actions = hot('--a-', { a: new TodoAction.Create(new Todo(null, 'test1')) });
    const expected = cold('--b', { b: new TodoAction.CreateFailed({}) });
    expect(effects.create$).toBeObservable(expected);
  });

  it('should return a new TodoAction.UpdateSuccess', () => {
    const response = new Todo(1, 'test1');
    service.update.and.returnValue(Observable.of(response));
    actions = hot('--a-', { a: new TodoAction.Update(response) });
    const expected = cold('--b', { b: new TodoAction.UpdateSuccess(response) });
    expect(effects.update$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindAll, on TodoAction.UpdateSuccess', () => {
    actions = hot('--a-', { a: new TodoAction.UpdateSuccess({}) });
    const expected = cold('--d', { d: new TodoAction.FindAll() });
    expect(effects.updateSuccess$).toBeObservable(expected);
  });

  it('should return a new TodoAction.UpdateFailed', () => {
    service.update.and.returnValue(Observable.throw({}));
    actions = hot('--a-', { a: new TodoAction.Update(new Todo(1, 'test1')) });
    const expected = cold('--b', { b: new TodoAction.UpdateFailed({}) });
    expect(effects.update$).toBeObservable(expected);
  });

  it('should return a new TodoAction.DeleteSuccess', () => {
    service.delete.and.returnValue(Observable.of({}));
    actions = hot('--a-', { a: new TodoAction.Delete(1) });
    const expected = cold('--b', { b: new TodoAction.DeleteSuccess(1) });
    expect(effects.delete$).toBeObservable(expected);
  });

  it('should return a new TodoAction.FindAll, on TodoAction.DeleteSuccess', () => {
    actions = hot('--a-', { a: new TodoAction.DeleteSuccess({}) });
    const expected = cold('--d', { d: new TodoAction.FindAll() });
    expect(effects.deleteSuccess$).toBeObservable(expected);
  });

  it('should return a new TodoAction.DeleteFailed', () => {
    service.delete.and.returnValue(Observable.throw({}));
    actions = hot('--a-', { a: new TodoAction.Delete(1) });
    const expected = cold('--b', { b: new TodoAction.DeleteFailed({}) });
    expect(effects.delete$).toBeObservable(expected);
  });
});
