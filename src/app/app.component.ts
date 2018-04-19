import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Todo } from '@app/models';
import * as TodoActions from '@app/todo/actions';
import * as fromTodo from '@app/todo/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;
  todoForm: FormGroup;

  /**
   * Constructor
   */
  constructor(
    private fb: FormBuilder,
    private store: Store<fromTodo.State>
  ) {
    this.todoForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  /**
   * Create
   */
  create(text: string) {
    this.store.dispatch(new TodoActions.CreateTodo({
      todo: new Todo(null, text)
    }));
    this.todoForm.reset();
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
    this.loading$ = this.store.pipe(select(fromTodo.getLoading));
    this.todos$ = this.store.pipe(select(fromTodo.getTodos));
    this.store.dispatch(new TodoActions.LoadTodos());
  }
}
