import { NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { TodoEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('todo', reducers),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStoreModule { }
