import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';

import * as TodoActions from '../../actions';
import { Todo, TodoUpdateDto } from '../../models';
import { selectLoading } from '../../reducers';

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
  loading$ = this.store.pipe(select(selectLoading));
  todo: Todo;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) private data: { todo: Todo }
  ) {
    this.todo = this.data.todo;
  }

  ngOnInit(): void {
    this.form.setValue({
      text: this.todo.title,
    });
  }

  save(): void {
    const title = this.form.get('text')?.value as string;
    const todo: TodoUpdateDto = {
      id: this.todo.id,
      completed: this.todo.completed,
      title,
    };
    this.store.dispatch(TodoActions.update({ todo }));
  }
}
