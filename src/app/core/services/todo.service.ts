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

  constructor(private http: HttpClient) { }

  findAll(offset?: number, limit?: number): Observable<Page<Todo>> {
    const url = `${this.baseUrl}/todos`;
    return this.http.get<Page<Todo>>(url);
  }

}
