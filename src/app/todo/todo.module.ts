import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material';
import { SharedModule } from '@app/shared';
import { TodoComponentsModule } from './components';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    TodoComponentsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent
  ]
})
export class TodoModule { }
