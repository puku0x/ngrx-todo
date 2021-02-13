import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Todo } from '../models';

/**
 * Feature name
 */
export const featureName = 'todo';

/**
 * State
 */
export interface State extends EntityState<Todo> {
  loading: boolean;
  selectedId?: string;
  error?: any;
}

/**
 * Adapter
 */
export const adapter = createEntityAdapter<Todo>();

/**
 * Initial state
 */
export const initialState: State = adapter.getInitialState({
  loading: false,
});
