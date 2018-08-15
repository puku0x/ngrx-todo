import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatButtonModule,
  MatDialogModule,
 } from '@angular/material';

import { TodoDeleteDialogComponent } from './todo-delete-dialog.component';

describe('TodoDeleteDialogComponent', () => {
  let component: TodoDeleteDialogComponent;
  let fixture: ComponentFixture<TodoDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatDialogModule,
      ],
      declarations: [TodoDeleteDialogComponent],
    })
    .compileComponents();
    fixture = TestBed.createComponent(TodoDeleteDialogComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
