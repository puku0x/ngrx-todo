import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Todo } from '@app/models';
import * as TodoActions from './+state/actions';
import * as fromTodo from './+state/reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

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
    this.loading$ = this.store.select(fromTodo.getLoading);
    this.todos$ = this.store.select(fromTodo.getTodos);
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
    this.todoForm.reset();
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
