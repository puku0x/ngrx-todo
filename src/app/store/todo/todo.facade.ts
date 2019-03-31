import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { Todo } from '@app/models';
import { State } from './reducers';
import { todoQuery } from './selectors';
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
} from './actions';

@Injectable()
export class TodoFacade {
  loading$ = this.store.pipe(select(todoQuery.getLoading));
  todos$ = this.store.pipe(select(todoQuery.getTodos));
  loadTodosSuccess$ = this.actions$.pipe(ofType(loadTodosSuccess.type));
  loadTodosFail$ = this.actions$.pipe(ofType(loadTodosFailure.type));
  createTodoSuccess$ = this.actions$.pipe(ofType(createTodoSuccess.type));
  createTodoFail$ = this.actions$.pipe(ofType(createTodoFailure.type));
  updateTodoSuccess$ = this.actions$.pipe(ofType(updateTodoSuccess.type));
  updateTodoFail$ = this.actions$.pipe(ofType(updateTodoFailure.type));
  deleteTodoSuccess$ = this.actions$.pipe(ofType(deleteTodoSuccess.type));
  deleteTodoFail$ = this.actions$.pipe(ofType(deleteTodoFailure.type));

  constructor(
    private store: Store<State>,
    private actions$: Actions<TodoActions>
  ) {}

  /**
   * Find all
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number) {
    this.store.dispatch(loadTodos({ offset, limit }));
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Partial<Todo>) {
    this.store.dispatch(createTodo({ todo }));
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo) {
    this.store.dispatch(
      updateTodo({
        todo: {
          id: todo.id,
          changes: todo
        }
      })
    );
  }

  /**
   * Delete
   * @param id ID
   */
  delete(id: string) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
