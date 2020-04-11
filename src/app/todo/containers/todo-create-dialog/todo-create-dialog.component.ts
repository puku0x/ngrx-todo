import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { Todo } from '../../models';
import * as TodoSelectors from '../../store/selectors';
import * as TodoActions from '../../store/actions';

@Component({
  selector: 'app-todo-create-dialog',
  templateUrl: './todo-create-dialog.component.html',
  styleUrls: ['./todo-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreateDialogComponent {
  form = this.fb.group({
    text: ['', Validators.required],
  });
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));

  constructor(private fb: FormBuilder, private store: Store) {}

  save() {
    const text: string = this.form.get('text')?.value;
    const todo: Partial<Todo> = {
      text,
    };
    this.store.dispatch(TodoActions.create({ todo }));
  }
}
