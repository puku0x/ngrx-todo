import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import * as TodoActions from '../../actions';
import { Todo } from '../../models';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [TodoComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadAll', () => {
    component.ngOnInit();
    const action = TodoActions.loadAll({ offset: 0, limit: 100 });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showCreateDialog', () => {
    component.showCreateDialog();
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
    component.showEditDialog(todo);
    const action = TodoActions.showEditDialog({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should call showRemoveDialog', () => {
    const id = '1';
    component.showRemoveDialog(id);
    const action = TodoActions.showRemoveDialog({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
