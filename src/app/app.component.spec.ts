import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import * as TodoAction from './core/actions/todo.action';
import { reducers } from './core/reducers';
import * as TodoReducer from './core/reducers/todo.reducer';
import { Todo } from './interfaces';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<TodoReducer.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app'`, () => {
    expect(component.title).toEqual('ngrx-todo');
  });

  it('should render title in a h2 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('ngrx-todo');
  }));

  it('should dispatch an action to load data', () => {
    const action = new TodoAction.FindAll();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to create data', () => {
    const todo = new Todo(null, 'test');
    const action = new TodoAction.Create(todo);
    component.create(todo.content);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to update data', () => {
    const todo = new Todo(1, 'test');
    const action = new TodoAction.Update(todo);
    component.update(todo);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should dispatch an action to delete data', () => {
    const todo = new Todo(1, 'test');
    const action = new TodoAction.Delete(todo.id);
    component.delete(todo);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});
