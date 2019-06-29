import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Todo } from '../../../models';
import { TodoFacade } from '../../../store/facades';
import { TodoEditDialogComponent } from './todo-edit-dialog.component';

describe('TodoEditDialogComponent', () => {
  let service: TodoFacade;
  let component: TodoEditDialogComponent;
  let fixture: ComponentFixture<TodoEditDialogComponent>;

  beforeEach(async(() => {
    const todo: Todo = {
      id: '1',
      text: 'test1',
      checked: true,
      createdAt: 1000000,
      updatedAt: 2000000
    };
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoEditDialogComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { todo } },
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['update'])
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TodoEditDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TodoFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update', () => {
    component.ngOnInit();
    component.save();
    expect(service.update).toHaveBeenCalled();
  });
});
