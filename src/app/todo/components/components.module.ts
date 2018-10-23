import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material';
import { SharedModule } from '@app/shared';

import { TodoEditDialogComponent } from './todo-edit-dialog/todo-edit-dialog.component';
import { TodoDeleteDialogComponent } from './todo-delete-dialog/todo-delete-dialog.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

/**
 * Presentational components
 */
const components = [
  TodoEditDialogComponent,
  TodoDeleteDialogComponent,
  TodoListComponent,
  TodoListItemComponent,
];

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class TodoComponentsModule { }
