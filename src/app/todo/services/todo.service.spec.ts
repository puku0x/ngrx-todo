import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: 'API_URL', useValue: '' }],
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should successfully mock find all request', () => {
    const response: Todo[] = [
      {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '2',
        title: 'test2',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '3',
        title: 'test3',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
    ];
    service.findAll().subscribe((data) => {
      expect(data).toBe(response);
    });
    const req = httpMock.expectOne(`/todos`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  });

  it('should successfully mock find all request with arguments', () => {
    const response: Todo[] = [
      {
        id: '1',
        title: 'test1',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '2',
        title: 'test2',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
      {
        id: '3',
        title: 'test3',
        completed: true,
        createdAt: 1000000,
        updatedAt: 2000000,
      },
    ];
    const offset = 1;
    const limit = 100;
    service.findAll(offset, limit).subscribe((data) => {
      expect(data).toBe(response);
    });
    const req = httpMock.expectOne(`/todos?offset=${offset}&limit=${limit}`);
    expect(req.request.method).toEqual('GET');
    req.flush(response);
  });

  it('should successfully mock find request', () => {
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    service.find(todo.id).subscribe((data) => {
      expect(data).toBe(todo);
    });
    const req = httpMock.expectOne(`/todos/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(todo);
  });

  it('should successfully mock create request', () => {
    const dto: TodoCreateDto = {
      title: 'test1',
    };
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    service.create(dto).subscribe((data) => {
      expect(data).toEqual(todo);
    });
    const req = httpMock.expectOne(`/todos`);
    expect(req.request.method).toEqual('POST');
    req.flush(todo);
  });

  it('should successfully mock update request', () => {
    const dto: TodoUpdateDto = {
      id: '1',
      title: 'test1',
      completed: true,
    };
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    service.update(dto).subscribe((data) => {
      expect(data).toEqual(todo);
    });
    const req = httpMock.expectOne(`/todos/1`);
    expect(req.request.method).toEqual('PUT');
    req.flush(todo);
  });

  it('should successfully mock remove request', () => {
    const id = '1';
    service.remove(id).subscribe((data) => {
      expect(data).toEqual(id);
    });
    const req = httpMock.expectOne(`/todos/1`);
    expect(req.request.method).toEqual('DELETE');
  });
});
