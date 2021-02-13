import { ActionReducer } from '@ngrx/store';

import { State } from '../states';

export const logger = (reducer: ActionReducer<State>): ActionReducer<State> => (
  state,
  action
) => {
  const result = reducer(state, action);
  console.groupCollapsed(action.type);
  console.log('prev state', state);
  console.log('action', action);
  console.log('next state', result);
  console.groupEnd();

  return result;
};
