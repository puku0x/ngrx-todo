import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Todo } from './models';
import * as TodoActions from './actions';
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
  create(text: string) {
    this.store.dispatch(new TodoActions.CreateTodo({
      todo : new Todo(null, text)
    }));
  }

  /**
   * Update
   */
  update(todo: Todo) {
    this.store.dispatch(new TodoActions.UpdateTodo({
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
    this.store.dispatch(new TodoActions.DeleteTodo({ id: todo.id }));
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.loading$ = this.store.pipe(select(fromTodo.selectLoading));
    this.todos$ = this.store.pipe(select(fromTodo.selectTodos));
    this.store.dispatch(new TodoActions.LoadTodos());
  }
}
