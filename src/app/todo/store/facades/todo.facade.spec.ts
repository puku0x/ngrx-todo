import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../../models';
import * as TodoActions from '../actions';
import { State } from '../states';
import { TodoFacade } from './todo.facade';

describe('TodoFacade', () => {
  let store: Store<State>;
  let facade: TodoFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()],
    });
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
    facade = TestBed.inject(TodoFacade);
  });

  it('should call loadAll', () => {
    facade.loadAll(0, 100);
    const action = TodoActions.loadAll({ offset: 0, limit: 100 });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call load', () => {
    const id = '1';
    facade.load(id);
    const action = TodoActions.load({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call create', () => {
    const todo: TodoCreateDto = {
      title: 'test1',
    };
    facade.create(todo);
    const action = TodoActions.create({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call update', () => {
    const todo: TodoUpdateDto = {
      id: '1',
      title: 'test1',
      completed: true,
    };
    facade.update(todo);
    const action = TodoActions.update({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call remove', () => {
    const id = '1';
    facade.remove(id);
    const action = TodoActions.remove({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showCreateDialog', () => {
    facade.showCreateDialog();
    const action = TodoActions.showCreateDialog();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showEditDialog', () => {
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    facade.showEditDialog(todo);
    const action = TodoActions.showEditDialog({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showRemoveDialog', () => {
    const id = '1';
    facade.showRemoveDialog(id);
    const action = TodoActions.showRemoveDialog({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
