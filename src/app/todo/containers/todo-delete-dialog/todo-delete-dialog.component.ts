import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import * as TodoActions from '../../actions';
import { selectLoading } from '../../reducers';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDeleteDialogComponent {
  loading$ = this.store.pipe(select(selectLoading));
  id: string;

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data: { id: string }
  ) {
    this.id = this.data.id;
  }

  remove(): void {
    this.store.dispatch(TodoActions.remove({ id: this.id }));
  }
}
