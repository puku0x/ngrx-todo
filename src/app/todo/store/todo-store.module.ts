import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoComponentsModule } from '../components';
import { featureName } from './state';
import { reducer } from './reducers';
import { TodoEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([TodoEffects]),
    TodoComponentsModule
  ]
})
export class TodoStoreModule {}
