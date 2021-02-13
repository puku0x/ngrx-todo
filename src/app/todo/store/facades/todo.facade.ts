import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../../models';
import * as TodoActions from '../actions';
import * as TodoSelectors from '../selectors';

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
   *
   * @param offset Offset
   * @param limit Limit
   */
  loadAll(offset?: number, limit?: number): void {
    this.store.dispatch(TodoActions.loadAll({ offset, limit }));
  }

  /**
   * Load
   *
   * @param id ID
   */
  load(id: string): void {
    this.store.dispatch(TodoActions.load({ id }));
  }

  /**
   * Create
   *
   * @param todo TodoCreateDto
   */
  create(todo: TodoCreateDto): void {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  /**
   * Update
   *
   * @param todo TodoUpdateDto
   */
  update(todo: TodoUpdateDto): void {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  /**
   * Remove
   *
   * @param id ID
   */
  remove(id: string): void {
    this.store.dispatch(TodoActions.remove({ id }));
  }

  /**
   * Show create dialog
   */
  showCreateDialog(): void {
    this.store.dispatch(TodoActions.showCreateDialog());
  }

  /**
   * Show edit dialog
   *
   * @param todo Todo
   */
  showEditDialog(todo: Todo): void {
    this.store.dispatch(TodoActions.showEditDialog({ todo }));
  }

  /**
   * Show delete dialog
   *
   * @param id ID
   */
  showRemoveDialog(id: string): void {
    this.store.dispatch(TodoActions.showRemoveDialog({ id }));
  }
}
