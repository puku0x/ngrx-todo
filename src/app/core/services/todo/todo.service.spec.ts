import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Todo } from '@app/models';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        TodoService
      ]
    });
    service = TestBed.get(TodoService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully mock find all request', () => {
    const response = [
      new Todo('1', 'test1'),
      new Todo('2', 'test2'),
      new Todo('3', 'test3'),
    ];
    service.findAll().subscribe(data => {
      expect(data).toBe(response);
    });
    const req = httpMock.expectOne(`/v1/todos`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
    httpMock.verify();
  });

  it('should successfully mock find request', () => {
    const todo = new Todo('1', 'test');
    service.find(todo.id).subscribe(data => {
      expect(data).toBe(todo);
    });
    const req = httpMock.expectOne(`/v1/todos/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(todo);
    httpMock.verify();
  });

  it('should successfully mock create request', () => {
    const todo = new Todo('1', 'test');
    service.create(new Todo(null, 'test')).subscribe(data => {
      expect(data).toEqual(todo);
    });
    const req = httpMock.expectOne(`/v1/todos`);
    expect(req.request.method).toEqual('POST');
    req.flush(todo);
    httpMock.verify();
  });

  it('should successfully mock update request', () => {
    const todo = new Todo('1', 'test');
    const todo2 = new Todo(todo.id, 'test2');
    service.update(todo2).subscribe(data => {
      expect(data).toEqual(todo2);
    });
    const req = httpMock.expectOne(`/v1/todos/1`);
    expect(req.request.method).toEqual('PUT');
    req.flush(todo2);
    httpMock.verify();
  });

  it('should successfully mock delete request', () => {
    const todo = new Todo('1', 'test');
    service.delete(todo.id).subscribe(data => {
      expect(data).toEqual(null);
    });
    const req = httpMock.expectOne(`/v1/todos/1`);
    expect(req.request.method).toEqual('DELETE');
    httpMock.verify();
  });

});
