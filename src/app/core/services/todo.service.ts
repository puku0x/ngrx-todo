import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Page } from '../../interfaces/page';
import { Todo } from '../../interfaces/todo';

/**
 * サービス
 */
@Injectable()
export class TodoService {
  baseUrl = 'https://spring-boot-travis-heroku.herokuapp.com/api/v1';
  //baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  /**
   * 一覧取得
   * @param offset
   * @param limit
   */
  findAll(offset?: number, limit?: number): Observable<Page<Todo>> {
    const url = `${this.baseUrl}/todos`;
    return this.http.get<Page<Todo>>(url);
  }

  /**
   * 一件取得
   * @param id
   */
  find(id: number): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * 登録
   * @param todo
   */
  create(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * 更新
   * @param todo
   */
  update(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * 削除
   * @param todo
   */
  delete(todo: Todo): Observable<void>  {
    const url = `${this.baseUrl}/todos/${todo.id}`;
    return this.http.delete<void>(url);
  }

}
