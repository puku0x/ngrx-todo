import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '@app/models';

/**
 * Service
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  /**
   * Find all
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    const url = `/api/v1/todos`;

    let params = new HttpParams();
    params = !!offset ? params.set('offset', `${offset}`) : params;
    params = !!limit ? params.set('limit', `${limit}`) : params;

    return this.http.get<Todo[]>(url);
  }

  /**
   * Find
   * @param id Id
   */
  find(id: string): Observable<Todo> {
    const url = `/api/v1/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Todo): Observable<Todo> {
    const url = `/api/v1/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo): Observable<Todo> {
    const url = `/api/v1/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Delete
   * @param id Id
   */
  delete(id: string): Observable<void>  {
    const url = `/api/v1/todos/${id}`;
    return this.http.delete<void>(url);
  }

}
