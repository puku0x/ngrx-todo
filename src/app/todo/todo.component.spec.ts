import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Todo } from '@app/models';
import { SharedModule } from '@app/shared';
import { AppStoreModule } from '@app/store';
import { TodoFacade } from '@app/store/todo';
import { TodoListComponent, TodoEditDialogComponent, TodoDeleteDialogComponent } from './components';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let service: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        AppStoreModule,
        SharedModule,
      ],
      declarations: [
        TodoComponent,
        TodoListComponent,
        TodoEditDialogComponent,
        TodoDeleteDialogComponent,
      ]
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

  // it('should dispatch an action to load data', () => {
  //   const app: TodoComponent = fixture.debugElement.componentInstance;
  //   app.ngOnInit();
  //   const action = new TodoActions.LoadTodos();
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  //   expect(store.pipe).toHaveBeenCalled();
  // });

  // it('should dispatch an action to create data', () => {
  //   const todo = new Todo(null, 'test');
  //   const app: TodoComponent = fixture.debugElement.componentInstance;
  //   app.onCreate(todo);
  //   const action = new TodoActions.CreateTodo({ todo });
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  // });

  // it('should dispatch an action to update data', () => {
  //   const todo = new Todo('1', 'test');
  //   const app: TodoComponent = fixture.debugElement.componentInstance;
  //   app.onUpdate(todo);
  //   const action = new TodoActions.UpdateTodo({
  //     todo: {
  //       id: '1',
  //       changes: todo
  //     }
  //   });
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  // });

  // it('should dispatch an action to delete data', () => {
  //   const todo = new Todo('1', 'test');
  //   const app: TodoComponent = fixture.debugElement.componentInstance;
  //   app.onDelete(todo);
  //   const action = new TodoActions.DeleteTodo({ id: todo.id });
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  // });
});
