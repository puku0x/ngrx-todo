import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '@app/services';
import {
  TodoActionTypes,
  LoadTodosSuccess,
  LoadTodosFail,
  CreateTodoSuccess,
  CreateTodoFail,
  UpdateTodoSuccess,
  UpdateTodoFail,
  DeleteTodoSuccess,
  DeleteTodoFail,
  TodoActions
} from '../actions';

/**
 * Todo effects
 */
@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<TodoActions>,
    private todoService: TodoService
  ) {}

  /**
   * Load todos
   */
  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActionTypes.LoadTodos),
    switchMap(action => {
      const { offset, limit } = action.payload;
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
  createTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.CreateTodo),
    concatMap(action => {
      const { todo } = action.payload;
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
  updateTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.UpdateTodo),
    concatMap(action => {
      const { todo } = action.payload;
      return this.todoService.update(todo.changes).pipe(
        map(
          result =>
            new UpdateTodoSuccess({ todo: { id: result.id, changes: result } })
        ),
        catchError(error => of(new UpdateTodoFail({ error })))
      );
    })
  );

  /**
   * Delete
   */
  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.DeleteTodo),
    concatMap(action => {
      const { id } = action.payload;
      return this.todoService.delete(id).pipe(
        map(() => new DeleteTodoSuccess({ id })),
        catchError(error => of(new DeleteTodoFail({ error })))
      );
    })
  );
}
