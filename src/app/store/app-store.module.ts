import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  MinimalRouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../../environments/environment';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: MinimalRouterStateSerializer
    }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      name: 'learn-ngrx'
    }),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule {}
