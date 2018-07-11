import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {
  @Input() loading: boolean;
  @Output() create = new EventEmitter<string>();

  form: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required]
    });
  }
}
