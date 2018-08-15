import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '@app/services';
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
    map(action => action.payload),
    switchMap(payload => {
      const { offset, limit } = payload;
      return this.todoService.findAll(offset, limit).pipe(
        map(result => new LoadTodosSuccess({ todos: result })),
        catchError(error => of(new LoadTodosFail({ error })))
      );
    })
  );

  /**
   * Create
   */
  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType<CreateTodo>(TodoActionTypes.CreateTodo),
    map(action => action.payload),
    concatMap(payload => {
      const { todo } = payload;
      return this.todoService.create(todo).pipe(
        map(result => new CreateTodoSuccess({ todo: result })),
        catchError(error => of(new CreateTodoFail({ error })))
      );
    })
  );

  /**
   * Update
   */
  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType<UpdateTodo>(TodoActionTypes.UpdateTodo),
    map(action => action.payload),
    concatMap(payload => {
      const { todo } = payload;
      return this.todoService.update(todo.changes).pipe(
        map(result => new UpdateTodoSuccess({ todo: { id: result.id, changes: result }})),
        catchError(error => of(new UpdateTodoFail({ error })))
      );
    })
  );

  /**
   * Delete
   */
  @Effect()
  deleteTodo$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteTodo>(TodoActionTypes.DeleteTodo),
    map(action => action.payload),
    concatMap(payload => {
      const { id } = payload;
      return this.todoService.delete(id).pipe(
        map(() => new DeleteTodoSuccess({ id })),
        catchError(error => of(new DeleteTodoFail({ error })))
      );
    })
  );
}
