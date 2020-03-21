import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './states';
import { reducer } from './reducers';
import { TodoEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStoreModule {}
