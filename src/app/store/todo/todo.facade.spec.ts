import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { Todo } from '@app/models';
import { loadTodos, createTodo, updateTodo, deleteTodo } from './actions';
import { State } from './reducers';
import { TodoStoreModule } from './todo-store.module';
import { TodoFacade } from './todo.facade';

describe('TodoFacade', () => {
  let store: Store<State>;
  let facade: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TodoStoreModule
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.get(TodoFacade);
  }));

  it('should call LoadTodos', () => {
    facade.findAll(0, 100);
    const action = loadTodos({ offset: 0, limit: 100 });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call CreateTodo', () => {
    const todo = new Todo('1', 'test');
    facade.create(todo);
    const action = createTodo({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call UpdateTodo', () => {
    const todo = new Todo('1', 'test');
    facade.update(todo);
    const action = updateTodo({
      todo: {
        id: todo.id,
        changes: todo
      }
    });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call DeleteTodo', () => {
    const id = '1';
    facade.delete(id);
    const action = deleteTodo({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
