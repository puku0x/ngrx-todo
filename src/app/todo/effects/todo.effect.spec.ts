import { TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import * as TodoActions from '../actions';
import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';
import { TodoService } from '../services';
import { TodoEffects } from './todo.effect';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;
  let service: TodoService;
  let dialog: MatDialog;
  // let dialogRef: MatDialogRef<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj('MatDialog', ['open']),
        },
        {
          provide: TodoService,
          useValue: jasmine.createSpyObj('TodoService', [
            'findAll',
            'find',
            'create',
            'update',
            'remove',
          ]),
        },
      ],
    });
    effects = TestBed.inject(TodoEffects);
    dialog = TestBed.inject(MatDialog);
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadAll$', () => {
    it('should return loadAllSuccess', () => {
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
      const response = cold('-b', { b: todos });
      service.findAll = () => response;

      const offset = 0;
      const limit = 100;
      const action = TodoActions.loadAll({ offset, limit });
      const completion = TodoActions.loadAllSuccess({ todos });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.loadAll$).toBeObservable(expected);
    });

    it('should return loadAllFailure', () => {
      const error = 'error';
      const response = cold('-#', {}, error);
      service.findAll = () => response;

      const offset = 0;
      const limit = 100;
      const action = TodoActions.loadAll({ offset, limit });
      const completion = TodoActions.loadAllFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.loadAll$).toBeObservable(expected);
    });
  });

  describe('load$', () => {
    it('should return loadSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.find = () => response;

      const id = '1';
      const action = TodoActions.load({ id });
      const completion = TodoActions.loadSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.load$).toBeObservable(expected);
    });

    it('should return loadFailure', () => {
      const error = 'error';
      const response = cold('-#', {}, error);
      service.find = () => response;

      const id = '1';
      const action = TodoActions.load({ id });
      const completion = TodoActions.loadFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.load$).toBeObservable(expected);
    });
  });

  describe('create$', () => {
    it('should return createSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.create = () => response;

      const dto: TodoCreateDto = {
        title: 'test1',
      };
      const action = TodoActions.create({ todo: dto });
      const completion = TodoActions.createSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.create$).toBeObservable(expected);
    });

    it('should return createFailure', () => {
      const error = 'error';
      const response = cold('-#', {}, error);
      service.create = () => response;

      const dto: TodoCreateDto = {
        title: 'test1',
      };
      const action = TodoActions.create({ todo: dto });
      const completion = TodoActions.createFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.create$).toBeObservable(expected);
    });
  });

  describe('update$', () => {
    it('should return updateSuccess', () => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const response = cold('-b', { b: todo });
      service.update = () => response;

      const dto: TodoUpdateDto = {
        id: '1',
        title: 'test1',
        completed: true,
      };
      const action = TodoActions.update({ todo: dto });
      const completion = TodoActions.updateSuccess({ todo });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.update$).toBeObservable(expected);
    });

    it('should return updateFailure', () => {
      const error = 'error';
      const response = cold('-#', {}, error);
      service.update = () => response;

      const dto: TodoUpdateDto = {
        id: '1',
        title: 'test1',
        completed: true,
      };
      const action = TodoActions.update({ todo: dto });
      const completion = TodoActions.updateFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.update$).toBeObservable(expected);
    });
  });

  describe('remove$', () => {
    it('should return removeSuccess', () => {
      const id = '1';
      const response = cold('-b', { b: id });
      service.remove = () => response;

      const action = TodoActions.remove({ id });
      const completion = TodoActions.removeSuccess({ id });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.remove$).toBeObservable(expected);
    });

    it('should return removeFailure', () => {
      const error = 'error';
      const response = cold('-#', {}, error);
      service.remove = () => response;

      const id = '1';
      const action = TodoActions.remove({ id });
      const completion = TodoActions.removeFailure({ error });
      const expected = cold('--c', { c: completion });
      actions$ = hot('-a', { a: action });

      expect(effects.remove$).toBeObservable(expected);
    });
  });

  describe('showCreateDialog$', () => {
    it('should open dialog', (done) => {
      const action = TodoActions.showCreateDialog();
      actions$ = of(action);
      effects.showCreateDialog$.subscribe(() => {
        expect(dialog.open).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('hideCreateDialog$', () => {
    it('should close dialog', (done) => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const action = TodoActions.createSuccess({ todo });
      actions$ = of(action);
      effects.createDialogRef = { close: () => {} } as MatDialogRef<any>;
      spyOn(effects.createDialogRef, 'close').and.callThrough();
      effects.hideCreateDialog$.subscribe(() => {
        expect(effects.createDialogRef?.close).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('showEditDialog$', () => {
    it('should open dialog', (done) => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const action = TodoActions.showEditDialog({ todo });
      actions$ = of(action);
      effects.showEditDialog$.subscribe(() => {
        expect(dialog.open).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('hideEditDialog$', () => {
    it('should close dialog', (done) => {
      const todo: Todo = {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      };
      const action = TodoActions.updateSuccess({ todo });
      actions$ = of(action);
      effects.editDialogRef = { close: () => {} } as MatDialogRef<any>;
      spyOn(effects.editDialogRef, 'close').and.callThrough();
      effects.hideEditDialog$.subscribe(() => {
        expect(effects.editDialogRef?.close).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('showRemoveDialog$', () => {
    it('should open dialog', (done) => {
      const id = '1';
      const action = TodoActions.showRemoveDialog({ id });
      actions$ = of(action);
      effects.showRemoveDialog$.subscribe(() => {
        expect(dialog.open).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('hideRemoveDialog$', () => {
    it('should close dialog', (done) => {
      const id = '1';
      const action = TodoActions.removeSuccess({ id });
      actions$ = of(action);
      effects.removeDialogRef = { close: () => {} } as MatDialogRef<any>;
      spyOn(effects.removeDialogRef, 'close').and.callThrough();
      effects.hideRemoveDialog$.subscribe(() => {
        expect(effects.removeDialogRef?.close).toHaveBeenCalled();
        done();
      });
    });
  });
});
