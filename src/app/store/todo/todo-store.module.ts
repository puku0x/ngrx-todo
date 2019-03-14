import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer, STATE_ID } from './reducers';
import { TodoEffects } from './effects';
import { TodoFacade } from './todo.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(STATE_ID, reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoFacade]
})
export class TodoStoreModule {}
