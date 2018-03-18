import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Todo } from './models';
import * as TodoAction from './actions';
import * as fromTodo from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-todo';
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  /**
   * Constructor
   */
  constructor(private store: Store<fromTodo.State>) { }

  /**
   * Create
   */
  create(content: string) {
    this.store.dispatch(new TodoAction.CreateTodo({
      todo : {
        id: null,
        content: content
      }
    }));
  }

  /**
   * Update
   */
  update(todo: Todo) {
    this.store.dispatch(new TodoAction.UpdateTodo({
      todo: {
        id: todo.id,
        changes: todo
      }
    }));
  }

  /**
   * Delete
   */
  delete(todo: Todo) {
    this.store.dispatch(new TodoAction.DeleteTodo({ id: todo.id }));
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.loading$ = this.store.pipe(select(fromTodo.selectLoading));
    this.todos$ = this.store.pipe(select(fromTodo.selectAllTodos));
    this.store.dispatch(new TodoAction.LoadTodos());
  }
}
