import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './models';
import { TodoFacade } from './store/facades';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  vm$ = combineLatest([
    this.todoService.loading$,
    this.todoService.todos$
  ]).pipe(map(([loading, todos]) => ({ loading, todos })));

  /**
   * Constructor
   */
  constructor(private todoService: TodoFacade) {}

  /**
   * Initialize
   */
  ngOnInit() {
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
