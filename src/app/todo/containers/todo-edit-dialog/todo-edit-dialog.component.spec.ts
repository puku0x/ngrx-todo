import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import * as TodoActions from '../../actions';
import { Todo, TodoUpdateDto } from '../../models';
import { TodoEditDialogComponent } from './todo-edit-dialog.component';

describe('TodoEditDialogComponent', () => {
  let component: TodoEditDialogComponent;
  let fixture: ComponentFixture<TodoEditDialogComponent>;
  let store: Store;

  beforeEach(async () => {
    const todo: Todo = {
      id: '1',
      title: 'test1',
      completed: true,
      createdAt: 1000000,
      updatedAt: 2000000,
    };
    await TestBed.configureTestingModule({
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update', () => {
    component.ngOnInit();
    component.save();
    const dto: TodoUpdateDto = {
      id: '1',
      title: 'test1',
      completed: true,
    };
    const action = TodoActions.update({ todo: dto });

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
