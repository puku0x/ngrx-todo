import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import * as TodoActions from '../../actions';
import { Todo, TodoCreateDto } from '../../models';
import { TodoCreateDialogComponent } from './todo-create-dialog.component';

describe('TodoCreateDialogComponent', () => {
  let component: TodoCreateDialogComponent;
  let fixture: ComponentFixture<TodoCreateDialogComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoCreateDialogComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TodoCreateDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call create', () => {
    component.save();
    const todo: TodoCreateDto = {
      title: '',
    };
    const action = TodoActions.create({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
