import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import * as TodoActions from '../../actions';
import { Todo } from '../../models';
import { selectTodos, selectLoading } from '../../reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  vm$ = combineLatest([
    this.store.pipe(select(selectLoading)),
    this.store.pipe(select(selectTodos)),
  ]).pipe(map(([loading, todos]) => ({ loading, todos })));

  /**
   * Constructor
   */
  constructor(private store: Store) {}

  /**
   * Initialize
   */
  ngOnInit() {
    this.store.dispatch(TodoActions.loadAll({ offset: 0, limit: 100 }));
  }

  /**
   * Show create dialog
   */
  showCreateDialog(): void {
    this.store.dispatch(TodoActions.showCreateDialog());
  }

  /**
   * Show edit dialog
   */
  showEditDialog(todo: Todo): void {
    this.store.dispatch(TodoActions.showEditDialog({ todo }));
  }

  /**
   * Show remove dialog
   */
  showRemoveDialog(id: string): void {
    this.store.dispatch(TodoActions.showRemoveDialog({ id }));
  }
}
