import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as TodoAction from './core/actions/todo.action';
import * as TodoReducer from './core/reducers/todo.reducer';
import { Page, Todo } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos$: Observable<Todo[]>;

  /**
   * Constructor
   */
  constructor(private store: Store<TodoReducer.State>) { }

  /**
   * Create
   */
  create(text: string) {
    const todo = new Todo(null, text);
    this.store.dispatch(new TodoAction.Create(todo));
  }

  /**
   * Update
   */
  update(todo: Todo) {
    this.store.dispatch(new TodoAction.Update(todo));
  }

  /**
   * Delete
   */
  delete(todo: Todo) {
    this.store.dispatch(new TodoAction.Delete(todo.id));
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.todos$ = this.store.select(TodoReducer.getTodos);
    this.store.dispatch(new TodoAction.FindAll());
  }

}
