import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
})
export class CoreModule {}
