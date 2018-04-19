import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromTodo from './reducers';
import { TodoEffects } from './effects/todo.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('todo', fromTodo.reducers, { metaReducers: fromTodo.metaReducers }),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: []
})
export class TodoModule { }
