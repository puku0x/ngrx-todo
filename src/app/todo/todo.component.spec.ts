import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Todo } from '@app/models';
import { MaterialModule } from '@app/material';
import { SharedModule } from '@app/shared';
import { AppStoreModule } from '@app/store';
import { TodoFacade } from '@app/store/todo';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let service: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        SharedModule,
        AppStoreModule,
      ],
      declarations: [
        TodoComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    service = TestBed.get(TodoFacade);
    spyOn(service, 'findAll').and.callThrough();
    spyOn(service, 'create').and.callThrough();
    spyOn(service, 'update').and.callThrough();
    spyOn(service, 'delete').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call findALl', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call create', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo(null, 'test');
    app.onCreate(todo);
    expect(service.create).toHaveBeenCalledWith(todo);
  });

  it('should call update', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.onUpdate(todo);
    expect(service.update).toHaveBeenCalledWith(todo);
  });

  it('should call delete', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.onDelete(todo);
    expect(service.delete).toHaveBeenCalledWith(todo.id);
  });

});
