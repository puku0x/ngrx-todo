import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material';
import { SharedModule } from '@app/shared';
import {
  TodoEditDialogComponent,
  TodoDeleteDialogComponent,
  TodoListComponent,
  TodoListItemComponent
} from './components';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [MaterialModule, SharedModule, TodoRoutingModule],
  declarations: [
    TodoEditDialogComponent,
    TodoDeleteDialogComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoComponent
  ]
})
export class TodoModule {}
