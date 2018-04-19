import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from '@app/models';

/**
 * Service
 */
@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  /**
   * Find all
   * @param offset
   * @param limit
   */
  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    const url = `/todos`;
    return this.http.get<Todo[]>(url);
  }

  /**
   * Find
   * @param id
   */
  find(id: string): Observable<Todo> {
    const url = `/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   * @param todo
   */
  create(todo: Todo): Observable<Todo> {
    const url = `/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   * @param todo
   */
  update(todo: Todo): Observable<Todo> {
    const url = `/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Delete
   * @param id
   */
  delete(id: string): Observable<void>  {
    const url = `/todos/${id}`;
    return this.http.delete<void>(url);
  }

}
