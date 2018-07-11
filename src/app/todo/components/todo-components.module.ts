import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

/**
 * Presentational components
 */
const components = [
  TodoFormComponent,
  TodoListComponent,
  TodoItemComponent,
];

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class TodoComponentsModule { }
