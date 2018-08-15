import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { TodoListComponent, TodoEditDialogComponent, TodoDeleteDialogComponent } from './components';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoEditDialogComponent,
    TodoDeleteDialogComponent
  ]
})
export class TodoModule { }
