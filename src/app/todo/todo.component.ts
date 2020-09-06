import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { Todo } from './models';
import * as TodoSelectors from './store/selectors';
import * as TodoActions from './store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  vm$ = combineLatest([
    this.store.pipe(select(TodoSelectors.getLoading)),
    this.store.pipe(select(TodoSelectors.getTodos)),
  ]).pipe(map(([loading, todos]) => ({ loading, todos })));

  /**
   * Constructor
   */
  constructor(private store: Store) {}

  /**
   * Initialize
   */
  ngOnInit(): void {
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
