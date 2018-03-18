import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import {
  TodoActionTypes,
  LoadTodos,
  LoadTodosSuccess,
  LoadTodosFail,
  CreateTodo,
  CreateTodoSuccess,
  CreateTodoFail,
  UpdateTodo,
  UpdateTodoSuccess,
  UpdateTodoFail,
  DeleteTodo,
  DeleteTodoSuccess,
  DeleteTodoFail,
} from './actions';
import * as fromTodo from './reducers/todo.reducer';
import { reducers, metaReducers } from './reducers';
import { Todo } from './models';

describe('AppComponent', () => {
  let store: Store<fromTodo.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ngrx-todo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngrx-todo');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('ngrx-todo');
  }));

  it('should dispatch an action to load data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const action = new LoadTodos();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to create data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.create('test');
    const action = new CreateTodo({
      todo: {
        id: null,
        content: 'test',
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.update(new Todo(1, 'test'));
    const action = new UpdateTodo({
      todo: {
        id: 1,
        changes: new Todo(1, 'test')
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to delete data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    app.delete(new Todo(1, 'test'));
    const action = new DeleteTodo({ id: 1 });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
