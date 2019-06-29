import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { TodoFacade } from '../../../store/facades';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDeleteDialogComponent {
  loading$: Observable<boolean>;
  id: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id: string },
    private todoService: TodoFacade
  ) {
    this.loading$ = this.todoService.loading$;
    this.id = this.data.id;
  }

  remove() {
    this.todoService.remove(this.id);
  }
}
