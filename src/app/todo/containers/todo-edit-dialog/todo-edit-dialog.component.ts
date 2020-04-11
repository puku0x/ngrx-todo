import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import { Todo } from '../../models';
import * as TodoSelectors from '../../store/selectors';
import * as TodoActions from '../../store/actions';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditDialogComponent implements OnInit {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todo: Todo;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data: { todo: Todo }
  ) {
    this.todo = this.data.todo;
  }

  ngOnInit() {
    this.form.setValue({
      text: this.todo.text,
    });
  }

  save() {
    const text = this.form.get('text')?.value as string;
    const todo = {
      ...this.todo,
      text,
    };
    this.store.dispatch(TodoActions.update({ todo }));
  }
}
