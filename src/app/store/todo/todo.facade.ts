import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { Todo } from '@app/models';
import { State } from './reducers';
import { todoQuery } from './selectors';
import {
  TodoActionTypes,
  LoadTodos,
  CreateTodo,
  UpdateTodo,
  DeleteTodo,
  TodoActions
} from './actions';

@Injectable()
export class TodoFacade {
  loading$           = this.store.pipe(select(todoQuery.getLoading));
  todos$             = this.store.pipe(select(todoQuery.getTodos));
  loadTodosSuccess$  = this.actions$.pipe(ofType(TodoActionTypes.LoadTodosSuccess));
  loadTodosFail$     = this.actions$.pipe(ofType(TodoActionTypes.LoadTodosFail));
  createTodoSuccess$ = this.actions$.pipe(ofType(TodoActionTypes.CreateTodoSuccess));
  createTodoFail$    = this.actions$.pipe(ofType(TodoActionTypes.CreateTodoFail));
  updateTodoSuccess$ = this.actions$.pipe(ofType(TodoActionTypes.UpdateTodoSuccess));
  updateTodoFail$    = this.actions$.pipe(ofType(TodoActionTypes.UpdateTodoFail));
  deleteTodoSuccess$ = this.actions$.pipe(ofType(TodoActionTypes.DeleteTodoSuccess));
  deleteTodoFail$    = this.actions$.pipe(ofType(TodoActionTypes.DeleteTodoFail));

  constructor(
    private store: Store<State>,
    private actions$: Actions<TodoActions>,
  ) { }

  /**
   * Find all
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number) {
    this.store.dispatch(new LoadTodos({ offset, limit }));
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Todo) {
    this.store.dispatch(new CreateTodo({ todo }));
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo) {
    this.store.dispatch(new UpdateTodo({
      todo: {
        id: todo.id,
        changes: todo
      }
    }));
  }

  /**
   * Delete
   * @param id ID
   */
  delete(id: string) {
    this.store.dispatch(new DeleteTodo({ id }));
  }

}
