import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import { Todo } from '@app/models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent {
  @Input() disabled: boolean;
  @Input() todo: Todo;
  @Output() select = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
}
