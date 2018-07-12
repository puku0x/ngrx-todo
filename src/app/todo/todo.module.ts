import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { TodoFormComponent, TodoItemComponent, TodoListComponent } from './components';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    SharedModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
