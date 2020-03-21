import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material';

import { TodoListComponent, TodoListItemComponent } from './components';
import {
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
} from './containers';
import { TodoStoreModule } from './store';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TodoRoutingModule,
    TodoStoreModule
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoCreateDialogComponent,
    TodoDeleteDialogComponent,
    TodoEditDialogComponent,
    TodoComponent
  ]
})
export class TodoModule {}
