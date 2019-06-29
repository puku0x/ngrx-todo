import { NgModule } from '@angular/core';

import { TodoComponentsModule } from './components';
import { TodoStoreModule } from './store';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [TodoRoutingModule, TodoStoreModule, TodoComponentsModule]
})
export class TodoModule {}
