import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';

import { SharedModule } from '@app/shared';
import { Todo } from '@app/models';

import { AppStoreModule } from '@app/store';
import * as TodoActions from '@app/store/todo/actions';
import * as fromTodo from '@app/store/todo/reducers';
import { TodoListComponent, TodoEditDialogComponent, TodoDeleteDialogComponent } from './components';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<fromTodo.State>;

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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data', () => {
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.ngOnInit();
    const action = new TodoActions.LoadTodos();
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.pipe).toHaveBeenCalled();
  });

  it('should dispatch an action to create data', () => {
    const todo = new Todo(null, 'test');
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.onCreate(todo);
    const action = new TodoActions.CreateTodo({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const todo = new Todo('1', 'test');
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.onUpdate(todo);
    const action = new TodoActions.UpdateTodo({
      todo: {
        id: '1',
        changes: todo
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to delete data', () => {
    const todo = new Todo('1', 'test');
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.onDelete(todo);
    const action = new TodoActions.DeleteTodo({ id: todo.id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
