import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '@app/models';
import * as TodoActions from '@app/store/todo/actions';
import * as fromTodo from '@app/store/todo/reducers';

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
  constructor(private store: Store<fromTodo.State>) {
    this.loading$ = this.store.pipe(select(fromTodo.getLoading));
    this.todos$ = this.store.pipe(select(fromTodo.getTodos));
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.store.dispatch(new TodoActions.LoadTodos());
  }

  /**
   * Create
   */
  onCreate(text: string) {
    this.store.dispatch(new TodoActions.CreateTodo({
      todo: new Todo(null, text)
    }));
  }

  /**
   * Update
   */
  onUpdate(todo: Todo) {
    this.store.dispatch(new TodoActions.UpdateTodo({
      todo: {
        id: todo.id,
        changes: todo
      }
    }));
  }

  /**
   * Remove
   */
  onRemove(id: string) {
    this.store.dispatch(new TodoActions.DeleteTodo({ id }));
  }
}
