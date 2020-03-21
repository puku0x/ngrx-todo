import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoFacade } from '../../store/facades';
import { TodoCreateDialogComponent } from './todo-create-dialog.component';

describe('TodoCreateDialogComponent', () => {
  let component: TodoCreateDialogComponent;
  let fixture: ComponentFixture<TodoCreateDialogComponent>;
  let service: TodoFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [TodoCreateDialogComponent],
      providers: [
        {
          provide: TodoFacade,
          useValue: jasmine.createSpyObj('TodoFacade', ['create'])
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TodoCreateDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TodoFacade);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call create', () => {
    component.ngOnInit();
    component.save();
    expect(service.create).toHaveBeenCalled();
  });
});
