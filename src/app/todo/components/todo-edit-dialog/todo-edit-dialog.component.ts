import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '@app/models';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditDialogComponent implements OnInit {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Output() create = new EventEmitter<Todo>();
  @Output() update = new EventEmitter<Todo>();

  form: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.todo.text, Validators.required]
    });
  }

  /**
   * Save
   */
  onSubmit() {
    const text: string = this.form.get('text').value;
    const newTodo = { ...this.todo, text };
    if (!newTodo.id) {
      this.create.emit(newTodo);
    } else {
      this.update.emit(newTodo);
    }
  }

}
