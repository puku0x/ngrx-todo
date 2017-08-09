import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as TodoAction from '../actions/todo.action';
import { TodoService } from '../services/todo.service';

/**
 * エフェクト
 */
@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService,
  ) {}

  /**
   * 一覧取得
   */
  @Effect() findAll$: Observable<Action> = this.actions$
    .ofType(TodoAction.FIND_ALL, TodoAction.CREATE_SUCCESS, TodoAction.UPDATE_SUCCESS, TodoAction.DELETE_SUCCESS)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .findAll()
        .map(data => new TodoAction.FindAllSuccess(data.content))
    );

  /**
   * 一件取得
   */
  @Effect() find$: Observable<Action> = this.actions$
    .ofType(TodoAction.FIND)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .find(payload)
        .map(data => new TodoAction.FindSuccess(data))
    );

  /**
   * 登録
   */
  @Effect() create$: Observable<Action> = this.actions$
    .ofType(TodoAction.CREATE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .create(payload)
        .map(data => new TodoAction.CreateSuccess(data))
    );

  @Effect() update$: Observable<Action> = this.actions$
    .ofType(TodoAction.UPDATE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .update(payload)
        .map(data => new TodoAction.UpdateSuccess(data))
    );

  @Effect() delete$: Observable<Action> = this.actions$
    .ofType(TodoAction.DELETE)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .delete(payload)
        .map(() => new TodoAction.DeleteSuccess(payload))
    );

}
