import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Todo } from '../../models';
import * as TodoSelectors from '../selectors';
import * as TodoActions from '../actions';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));
  todo$ = this.store.pipe(select(TodoSelectors.getTodo));

  constructor(private store: Store) {}

  /**
   * Load all
   * @param offset Offset
   * @param limit Limit
   */
  loadAll(offset?: number, limit?: number) {
    this.store.dispatch(TodoActions.loadAll({ offset, limit }));
  }

  /**
   * Load
   * @param id ID
   */
  load(id: string) {
    this.store.dispatch(TodoActions.load({ id }));
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Partial<Todo>) {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo) {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  /**
   * Remove
   * @param id ID
   */
  remove(id: string) {
    this.store.dispatch(TodoActions.remove({ id }));
  }

  /**
   * Show create dialog
   */
  showCreateDialog() {
    this.store.dispatch(TodoActions.showCreateDialog());
  }

  /**
   * Show edit dialog
   * @param todo Todo
   */
  showEditDialog(todo: Todo) {
    this.store.dispatch(TodoActions.showEditDialog({ todo }));
  }

  /**
   * Show delete dialog
   * @param id ID
   */
  showRemoveDialog(id: string) {
    this.store.dispatch(TodoActions.showRemoveDialog({ id }));
  }
}
