import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo } from '@app/models';
import { SharedModule } from '@app/shared';
import { TodoEditDialogComponent } from './todo-edit-dialog.component';

describe('TodoEditDialogComponent', () => {
  let component: TodoEditDialogComponent;
  let fixture: ComponentFixture<TodoEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
      declarations: [TodoEditDialogComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    fixture = TestBed.createComponent(TodoEditDialogComponent);
    component = fixture.componentInstance;
    spyOn(component.create, 'emit');
    spyOn(component.update, 'emit');
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit create', () => {
    component.todo = new Todo(null, 'test');
    component.ngOnInit();
    component.onSubmit();
    expect(component.create.emit).toHaveBeenCalled();
  });

  it('should emit uodate', () => {
    component.todo = new Todo('1', 'test');
    component.ngOnInit();
    component.onSubmit();
    expect(component.update.emit).toHaveBeenCalled();
  });

});
