import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import * as TodoSelectors from '../../store/selectors';
import * as TodoActions from '../../store/actions';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDeleteDialogComponent {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  id: string;

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data: { id: string }
  ) {
    this.id = this.data.id;
  }

  remove() {
    this.store.dispatch(TodoActions.remove({ id: this.id }));
  }
}
