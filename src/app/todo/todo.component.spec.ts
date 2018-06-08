import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';
import { Todo } from '@app/models';
import { CoreModule, reducers, metaReducers } from '@app/core';
import * as TodoActions from './actions';
import * as fromTodo from './reducers';
import { TodoEffects } from './effects';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store<fromTodo.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreModule.forFeature('todo', fromTodo.reducers),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TodoEffects]),
        CoreModule.forRoot()
      ],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'select').and.callThrough();
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
    expect(store.select).toHaveBeenCalled();
  });

  it('should dispatch an action to create data', () => {
    const text = 'test';
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.create(text);
    const action = new TodoActions.CreateTodo({
      todo: new Todo(null, text)
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const todo = new Todo('1', 'test');
    const text = 'testtest';
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.update(todo, text);
    const action = new TodoActions.UpdateTodo({
      todo: {
        id: '1',
        changes: { ...todo, text: text }
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to delete data', () => {
    const todo = new Todo('1', 'test');
    const app: TodoComponent = fixture.debugElement.componentInstance;
    app.delete(todo);
    const action = new TodoActions.DeleteTodo({ id: todo.id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
