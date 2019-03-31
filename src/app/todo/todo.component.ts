import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Todo } from '@app/models';
import { TodoFacade } from '@app/store/todo';
import {
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
} from './components';

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
  @ViewChild('deleteDialog') deleteDialog: TemplateRef<
    TodoDeleteDialogComponent
  >;

  /**
   * Constructor
   */
  constructor(private dialog: MatDialog, private todoService: TodoFacade) {
    this.loading$ = this.todoService.loading$;
    this.todos$ = this.todoService.todos$;
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.todoService.findAll();
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
      width: '480px'
    });

    // Close
    merge(
      this.todoService.createTodoSuccess$,
      this.todoService.updateTodoSuccess$
    )
      .pipe(takeUntil(dialogRef.afterClosed()))
      .subscribe(() => dialogRef.close());
  }

  /**
   * Open delete dialog
   */
  openDeleteDialog(todo: Todo) {
    this.todo = { ...todo };

    // Open
    const dialogRef = this.dialog.open(this.deleteDialog);

    // Close
    this.todoService.deleteTodoSuccess$
      .pipe(takeUntil(dialogRef.afterClosed()))
      .subscribe(() => dialogRef.close());
  }

  /**
   * Create
   */
  onCreate(todo: Todo) {
    this.todoService.create(todo);
  }

  /**
   * Update
   */
  onUpdate(todo: Todo) {
    this.todoService.update(todo);
  }

  /**
   * Delete
   */
  onDelete(todo: Todo) {
    const id = todo.id;
    this.todoService.delete(id);
  }
}
