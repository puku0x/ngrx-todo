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
   * コンストラクタ
   */
  constructor(private store: Store<TodoReducer.State>) {
    this.todos$ = store.select(TodoReducer.getTodos);
  }

  /**
   * 登録
   */
  create(text: string) {
    const todo = new Todo(null, text);
    this.store.dispatch(new TodoAction.Create(todo));
  }

  /**
   * 更新
   */
  update(todo: Todo) {
    this.store.dispatch(new TodoAction.Update(todo));
  }

  /**
   * 削除
   */
  delete(todo: Todo) {
    this.store.dispatch(new TodoAction.Delete(todo));
  }

  /**
   * 初期化
   */
  ngOnInit() {
    this.store.dispatch(new TodoAction.FindAll());
  }

}
