import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { State } from '../states';
import { logger } from './logger.reducer';

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
