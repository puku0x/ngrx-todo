import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
 } from '@angular/material';

import { TodoEditDialogComponent } from './todo-edit-dialog.component';
import { Todo } from '@app/models';

describe('TodoEditDialogComponent', () => {
  let component: TodoEditDialogComponent;
  let fixture: ComponentFixture<TodoEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
      ],
      declarations: [TodoEditDialogComponent],
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
