import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class AppComponent implements OnInit, OnDestroy {

  todos$: Observable<Todo>;
  storeInfo: any;

  constructor(private store: Store<TodoReducer.State>) {
    this.storeInfo = store.select<any>('todo');
    this.storeInfo.subscribe();
  }

  create(text: string) {
    const todo = new Todo(null, text);
    this.store.dispatch(new TodoAction.Create(todo));
  }

  update(todo: Todo) {
    this.store.dispatch(new TodoAction.Update(todo));
  }

  delete(todo: Todo) {
    this.store.dispatch(new TodoAction.Delete(todo));
  }

  ngOnInit() {
    this.store.dispatch(new TodoAction.FindAll());
    this.todos$ = this.storeInfo
      .map(data => data.todos)
      .switchMap(todos => Observable.of(todos));
  }

  ngOnDestroy() {
    this.storeInfo.complete();
  }

}
