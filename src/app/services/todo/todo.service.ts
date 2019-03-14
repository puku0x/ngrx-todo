import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Todo } from '@app/models';

/**
 * Service
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  /**
   * Find all
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number) {
    const url = `/api/v1/todos`;
    return this.http.get<Todo[]>(url);
  }

  /**
   * Find
   * @param id Id
   */
  find(id: string) {
    const url = `/api/v1/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Partial<Todo>) {
    const url = `/api/v1/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo) {
    const url = `/api/v1/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Delete
   * @param id Id
   */
  delete(id: string) {
    const url = `/api/v1/todos/${id}`;
    return this.http.delete<void>(url);
  }
}
