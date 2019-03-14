import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material';
import { of } from 'rxjs';

import { Todo } from '@app/models';
import { MaterialModule } from '@app/material';
import { SharedModule } from '@app/shared';
import { AppStoreModule } from '@app/store';
import { TodoFacade } from '@app/store/todo';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let dialogService: MatDialog;
  let todoService: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MaterialModule,
        SharedModule,
        AppStoreModule
      ],
      declarations: [TodoComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // Dialog service
    dialogService = TestBed.get(MatDialog);
    spyOn(dialogService, 'open').and.returnValue({
      afterClosed: () => {
        return of(true);
      },
      close: () => {}
    });

    // Todo service
    todoService = TestBed.get(TodoFacade);
    spyOn(todoService, 'findAll').and.callThrough();
    spyOn(todoService, 'create').and.callThrough();
    spyOn(todoService, 'update').and.callThrough();
    spyOn(todoService, 'delete').and.callThrough();
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
    expect(todoService.findAll).toHaveBeenCalled();
  });

  it('should call create', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo(null, 'test');
    app.onCreate(todo);
    expect(todoService.create).toHaveBeenCalledWith(todo);
  });

  it('should call update', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.onUpdate(todo);
    expect(todoService.update).toHaveBeenCalledWith(todo);
  });

  it('should call delete', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.onDelete(todo);
    expect(todoService.delete).toHaveBeenCalledWith(todo.id);
  });

  it('should open edit dialog', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.openEditDialog(todo);
    expect(dialogService.open).toHaveBeenCalled();
  });

  it('should open delete dialog', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    const todo = new Todo('1', 'test');
    app.openDeleteDialog(todo);
    expect(dialogService.open).toHaveBeenCalled();
  });
});
