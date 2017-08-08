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

  @Effect() findAll$: Observable<Action> = this.actions$
    .ofType(TodoAction.FIND_ALL)
    .map(toPayload)
    .switchMap(payload =>
      this.todoService
        .findAll()
        .map(data => new TodoAction.FindAllSuccess(data))
    );

}
