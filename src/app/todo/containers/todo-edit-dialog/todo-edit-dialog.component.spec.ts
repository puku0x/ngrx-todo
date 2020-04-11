import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { Todo } from '../../models';
import * as TodoActions from '../../store/actions';
import { TodoEditDialogComponent } from './todo-edit-dialog.component';

describe('TodoEditDialogComponent', () => {
  let component: TodoEditDialogComponent;
  let fixture: ComponentFixture<TodoEditDialogComponent>;
  let store: Store;

  const todo: Todo = {
    id: '1',
    text: 'test1',
    checked: true,
    createdAt: 1000000,
    updatedAt: 2000000,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoEditDialogComponent],
      providers: [
        provideMockStore(),
        { provide: MAT_DIALOG_DATA, useValue: { todo } },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TodoEditDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update', () => {
    component.ngOnInit();
    component.save();
    const action = TodoActions.update({ todo });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
