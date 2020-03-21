import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Todo } from '../../models';
import { TodoFacade } from '../../store/facades';

@Component({
  selector: 'app-todo-create-dialog',
  templateUrl: './todo-create-dialog.component.html',
  styleUrls: ['./todo-create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateDialogComponent implements OnInit {
  loading$: Observable<boolean>;

  form = this.fb.group({
    text: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private todoService: TodoFacade) {}

  ngOnInit() {
    this.loading$ = this.todoService.loading$;
  }

  save() {
    const text: string = this.form.get('text')?.value;
    const todo: Partial<Todo> = {
      text
    };
    this.todoService.create(todo);
  }
}
