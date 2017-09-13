import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as TodoAction from '../actions/todo.action';
import { TodoService } from '../services/todo.service';

/**
 * Effect
 */
@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService,
  ) {}

  /**
   * Find all
   */
  @Effect() findAll$: Observable<Action> = this.actions$
    .ofType(TodoAction.FIND_ALL)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .findAll(payload.offset, payload.limit)
        .map(data => new TodoAction.FindAllSuccess(data.content))
        .catch(error => Observable.of(new TodoAction.FindAllFailed(error)))
    );

  /**
   * Find
   */
  @Effect() find$: Observable<Action> = this.actions$
    .ofType(TodoAction.FIND)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .find(payload)
        .map(data => new TodoAction.FindSuccess(data))
        .catch(error => Observable.of(new TodoAction.FindFailed(error)))
    );

  /**
   * Create
   */
  @Effect() create$: Observable<Action> = this.actions$
    .ofType(TodoAction.CREATE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .create(payload)
        .map(data => new TodoAction.CreateSuccess(data))
        .catch(error => Observable.of(new TodoAction.CreateFailed(error)))
    );

  /**
   * Create success
   */
  @Effect({ dispatch: false }) createSuccess$: Observable<Action> = this.actions$
    .ofType(TodoAction.CREATE_SUCCESS)
    .map(toPayload)
    .switchMap(payload =>
      Observable.of(new TodoAction.FindAll())
    );

  /**
   * Update
   */
  @Effect() update$: Observable<Action> = this.actions$
    .ofType(TodoAction.UPDATE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .update(payload)
        .map(data => new TodoAction.UpdateSuccess(data))
        .catch(error => Observable.of(new TodoAction.UpdateFailed(error)))
    );

  /**
   * Update success
   */
  @Effect({ dispatch: false }) updateSuccess$: Observable<Action> = this.actions$
    .ofType(TodoAction.UPDATE_SUCCESS)
    .map(toPayload)
    .switchMap(payload =>
      Observable.of(new TodoAction.FindAll())
    );

  /**
   * Delete
   */
  @Effect() delete$: Observable<Action> = this.actions$
    .ofType(TodoAction.DELETE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .delete(payload)
        .map(() => new TodoAction.DeleteSuccess(payload))
        .catch(error => Observable.of(new TodoAction.DeleteFailed(error)))
    );

  /**
   * Delete success
   */
  @Effect({ dispatch: false }) deleteSuccess$: Observable<Action> = this.actions$
    .ofType(TodoAction.DELETE_SUCCESS)
    .map(toPayload)
    .switchMap(payload =>
      Observable.of(new TodoAction.FindAll())
    );
}
