import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { TodoListComponent, TodoListItemComponent } from './components';
import {
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent,
} from './containers';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoStoreModule } from './todo-store.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    TodoRoutingModule,
    TodoStoreModule,
  ],
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoCreateDialogComponent,
    TodoDeleteDialogComponent,
    TodoEditDialogComponent,
    TodoComponent,
  ],
})
export class TodoModule {}
