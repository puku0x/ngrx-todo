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

  ngOnInit() {
    this.store.dispatch(new TodoAction.FindAll());
    this.todos$ = this.storeInfo
      .filter(payload => payload.page)
      .map(payload => payload.page)
      .switchMap(page  => Observable.of(page.content));
  }

  ngOnDestroy() {
    this.storeInfo.complete();
  }

}
