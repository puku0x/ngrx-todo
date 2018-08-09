import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '@app/models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() todo: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<string>();

  form: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: [{ value: '', disabled: this.disabled }, Validators.required]
    });
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.form.patchValue({
      text: this.todo.text
    });
  }

  /**
   * Submit
   */
  onSubmit() {
    const text = this.form.get('text').value;
    const todo = { ...this.todo, text};
    this.update.emit(todo);
  }
}
