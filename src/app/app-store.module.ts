import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterReducerState,
  routerReducer,
} from '@ngrx/router-store';
import {
  StoreModule,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

interface State {
  router: RouterReducerState;
}

const logger =
  (reducer: ActionReducer<State>): ActionReducer<State> =>
  (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };

const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
})
export class AppStoreModule {}
