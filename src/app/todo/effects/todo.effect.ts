import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '@app/core';
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

/**
 * Todo effects
 */
@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  /**
   * Load todos
   */
  @Effect()
  loadTodos$: Observable<Action> = this.actions$.pipe(
    ofType<LoadTodos>(TodoActionTypes.LoadTodos),
    switchMap(action =>
      this.todoService
        .findAll(action.payload.offset, action.payload.limit)
        .pipe(
          map(data => new LoadTodosSuccess({ todos: data })),
          catchError(error => of(new LoadTodosFail({ error })))
        )
    )
  );

  /**
   * Create
   */
  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType<CreateTodo>(TodoActionTypes.CreateTodo),
    concatMap(action =>
      this.todoService
        .create(action.payload.todo)
        .pipe(
          map(data => new CreateTodoSuccess({ todo: data })),
          catchError(error => of(new CreateTodoFail({ error })))
        )
    )
  );

  /**
   * Update
   */
  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateTodo>(TodoActionTypes.UpdateTodo),
    concatMap(action =>
      this.todoService
        .update({ ...action.payload.todo.changes })
        .pipe(
          map(data => new UpdateTodoSuccess({ todo: { id: data.id, changes: data } })),
          catchError(error => of(new UpdateTodoFail({ error })))
        )
    )
  );

  /**
   * Delete
   */
  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteTodo>(TodoActionTypes.DeleteTodo),
    concatMap(action =>
      this.todoService
        .delete(action.payload.id)
        .pipe(
          map(() => new DeleteTodoSuccess({ id: action.payload.id })),
          catchError(error => of(new DeleteTodoFail({ error })))
        )
    )
  );
}
