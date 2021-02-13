import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import * as TodoActions from '../../actions';
import { TodoDeleteDialogComponent } from './todo-delete-dialog.component';

describe('TodoDeleteDialogComponent', () => {
  let component: TodoDeleteDialogComponent;
  let fixture: ComponentFixture<TodoDeleteDialogComponent>;
  let store: Store;
  const id = '1';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideMockStore(),
        { provide: MAT_DIALOG_DATA, useValue: { id } },
      ],
      declarations: [TodoDeleteDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TodoDeleteDialogComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();
    spyOn(store, 'pipe').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call remove', () => {
    component.remove();
    const action = TodoActions.remove({ id });
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
