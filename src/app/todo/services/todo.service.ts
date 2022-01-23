import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';

/**
 * Service
 */
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private baseUrl: string
  ) {}

  /**
   * Find all
   *
   * @param offset Offset
   * @param limit Limit
   */
  findAll(offset?: number, limit?: number): Observable<Todo[]> {
    const url = `${this.baseUrl}/todos`;
    let params = new HttpParams();
    params = offset ? params.set('offset', `${offset}`) : params;
    params = limit ? params.set('limit', `${limit}`) : params;
    return this.http.get<Todo[]>(url, { params });
  }

  /**
   * Find
   *
   * @param id ID
   */
  find(id: string): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  /**
   * Create
   *
   * @param todo Todo
   */
  create(todo: TodoCreateDto): Observable<Todo> {
    const url = `${this.baseUrl}/todos`;
    return this.http.post<Todo>(url, todo);
  }

  /**
   * Update
   *
   * @param todo Todo
   */
  update(todo: TodoUpdateDto): Observable<Todo> {
    const url = `${this.baseUrl}/todos/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }

  /**
   * Remove
   *
   * @param id ID
   */
  remove(id: string): Observable<string> {
    const url = `${this.baseUrl}/todos/${id}`;
    return this.http.delete<void>(url).pipe(map(() => id));
  }
}
