import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './models';
import { TodoFacade } from './store/facades';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  /**
   * Constructor
   */
  constructor(private todoService: TodoFacade) {}

  /**
   * Initialize
   */
  ngOnInit() {
    this.loading$ = this.todoService.loading$;
    this.todos$ = this.todoService.todos$;
    this.todoService.loadAll();
  }

  /**
   * Show create dialog
   */
  showCreateDialog() {
    this.todoService.showCreateDialog();
  }

  /**
   * Show edit dialog
   */
  showEditDialog(todo: Todo) {
    this.todoService.showEditDialog(todo);
  }

  /**
   * Show remove dialog
   */
  showRemoveDialog(id: string) {
    this.todoService.showRemoveDialog(id);
  }
}
