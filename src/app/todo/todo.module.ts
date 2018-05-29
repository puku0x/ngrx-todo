import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material';
import { SharedModule } from '../shared';
import * as fromTodo from './reducers';
import { TodoEffects } from './effects/todo.effects';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    MaterialModule,
    SharedModule,
    StoreModule.forFeature('todo', fromTodo.reducers),
    EffectsModule.forFeature([TodoEffects]),
    TodoRoutingModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
