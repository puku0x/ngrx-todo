import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { Todo } from '@app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() select = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
}
