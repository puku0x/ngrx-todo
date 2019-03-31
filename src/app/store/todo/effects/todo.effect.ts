import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '@app/services';
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
    ofType(loadTodos.type),
    switchMap(action => {
      const { offset, limit } = action.payload;
      return this.todoService.findAll(offset, limit).pipe(
        map(result => loadTodosSuccess({ todos: result })),
        catchError(error => of(loadTodosFailure({ error })))
      );
    })
  );

  /**
   * Create
   */
  @Effect()
  createTodo$ = this.actions$.pipe(
    ofType(createTodo.type),
    concatMap(action => {
      const { todo } = action.payload;
      return this.todoService.create(todo).pipe(
        map(result => createTodoSuccess({ todo: result })),
        catchError(error => of(createTodoFailure({ error })))
      );
    })
  );

  /**
   * Update
   */
  @Effect()
  updateTodo$ = this.actions$.pipe(
    ofType(updateTodo.type),
    concatMap(action => {
      const { todo } = action.payload;
      return this.todoService.update(todo.changes).pipe(
        map(result =>
          updateTodoSuccess({ todo: { id: result.id, changes: result } })
        ),
        catchError(error => of(updateTodoFailure({ error })))
      );
    })
  );

  /**
   * Delete
   */
  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(deleteTodo.type),
    concatMap(action => {
      const { id } = action.payload;
      return this.todoService.delete(id).pipe(
        map(() => deleteTodoSuccess({ id })),
        catchError(error => of(deleteTodoFailure({ error })))
      );
    })
  );
}
