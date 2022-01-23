import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './effects';
import { name, reducer } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(name, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoStoreModule {}
