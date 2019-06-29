import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Todo } from '../../../models';
import { TodoFacade } from '../../../store/facades';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditDialogComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();
  loading$: Observable<boolean>;
  todo$: Observable<Todo>;
  form: FormGroup;
  todo: Todo;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { todo: Todo },
    private fb: FormBuilder,
    private todoService: TodoFacade
  ) {
    this.loading$ = this.todoService.loading$;
    // this.todo$ = this.todoService.todo$;
    this.todo = this.data.todo;
    this.form = this.fb.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form.setValue({
      text: this.todo.text
    });
  }

  ngOnDestroy() {
    this.onDestroy$.emit();
  }

  save() {
    const text: string = this.form.get('text').value;
    const todo = { ...this.todo, text };
    this.todoService.update(todo);
  }
}
