import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Observable, race } from 'rxjs';
import { tap, takeUntil, concatMap } from 'rxjs/operators';

import { Todo } from '@app/models';
import * as TodoActions from '@app/store/todo/actions';
import * as fromTodo from '@app/store/todo/reducers';
import { TodoEditDialogComponent } from './components/todo-edit-dialog/todo-edit-dialog.component';
import { TodoDeleteDialogComponent } from './components/todo-delete-dialog/todo-delete-dialog.component';
import { TodoActionTypes } from '@app/store/todo/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;
  todo: Todo;

  @ViewChild('editDialog') editDialog: TemplateRef<TodoEditDialogComponent>;
  @ViewChild('deleteDialog') deleteDialog: TemplateRef<TodoDeleteDialogComponent>;

  /**
   * Constructor
   */
  constructor(
    private store: Store<fromTodo.State>,
    private actions$: Actions,
    private dialog: MatDialog,
  ) {
    this.loading$ = this.store.pipe(select(fromTodo.getLoading));
    this.todos$ = this.store.pipe(select(fromTodo.getTodos));
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.store.dispatch(new TodoActions.LoadTodos());
  }

  /**
   * Open dialog
   */
  openEditDialog(todo?: Todo) {
    if (!todo) {
      this.todo = new Todo();
    }
    this.todo = { ...todo };

    // Open
    const dialogRef = this.dialog.open(this.editDialog, {
      disableClose: true,
      width: '480px'
    });

    // Close
    this.actions$.pipe(
      ofType(TodoActionTypes.CreateTodoSuccess, TodoActionTypes.UpdateTodoSuccess),
      tap(() => dialogRef.close()),
      takeUntil(dialogRef.afterClosed())
    ).subscribe();
  }

  /**
   * Open delete dialog
   */
  openDeleteDialog(todo: Todo) {
    this.todo = { ...todo };

    // Open
    const dialogRef = this.dialog.open(this.deleteDialog, {
      disableClose: true,
      width: '480px'
    });

    // Close
    this.actions$.pipe(
      ofType(TodoActionTypes.DeleteTodoSuccess),
      tap(() => dialogRef.close()),
      takeUntil(dialogRef.afterClosed())
    ).subscribe();
  }

  /**
   * Close dialog
   */
  closeDialog() {
    this.dialog.closeAll();
  }

  /**
   * Create
   */
  onCreate(todo: Todo) {
    this.store.dispatch(new TodoActions.CreateTodo({
      todo
    }));
  }

  /**
   * Update
   */
  onUpdate(todo: Todo) {
    this.store.dispatch(new TodoActions.UpdateTodo({
      todo: {
        id: todo.id,
        changes: todo
      }
    }));
  }

  /**
   * Delete
   */
  onDelete(todo: Todo) {
    const id = todo.id;
    this.store.dispatch(new TodoActions.DeleteTodo({ id }));
  }
}
