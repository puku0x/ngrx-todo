import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoEffects } from './effects';
import { reducer } from './reducers';
import { featureName } from './states';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoStoreModule {}
