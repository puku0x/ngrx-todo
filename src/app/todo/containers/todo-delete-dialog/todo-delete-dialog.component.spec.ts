import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TodoFacade } from '../../store/facades';
import { TodoDeleteDialogComponent } from './todo-delete-dialog.component';

describe('TodoDeleteDialogComponent', () => {
  let service: TodoFacade;
  let component: TodoDeleteDialogComponent;
  let fixture: ComponentFixture<TodoDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { id: '1' } },
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['remove'])
        }
      ],
      declarations: [TodoDeleteDialogComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TodoDeleteDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update', () => {
    component.remove();
    expect(service.remove).toHaveBeenCalled();
  });
});
