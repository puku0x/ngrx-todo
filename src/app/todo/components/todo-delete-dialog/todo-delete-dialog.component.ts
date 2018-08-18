import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Todo } from '@app/models';

@Component({
  selector: 'app-todo-delete-dialog',
  templateUrl: './todo-delete-dialog.component.html',
  styleUrls: ['./todo-delete-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDeleteDialogComponent {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<Todo>();
  @Output() cancel = new EventEmitter();
}
