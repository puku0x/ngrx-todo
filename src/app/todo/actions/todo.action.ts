import { createAction, props } from '@ngrx/store';

import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';

export const loadAll = createAction(
  '[Todo Page] Load All',
  props<{ offset?: number; limit?: number }>()
);

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  props<{ todos: Todo[] }>()
);

export const loadAllFailure = createAction(
  '[Todo API] Load All Failure',
  props<{ error: unknown }>()
);

export const load = createAction('[Todo Page] Load', props<{ id: string }>());

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  props<{ todo: Todo }>()
);

export const loadFailure = createAction(
  '[Todo API] Load Failure',
  props<{ error: unknown }>()
);

export const create = createAction(
  '[Todo Page] Create',
  props<{ todo: TodoCreateDto }>()
);

export const createSuccess = createAction(
  '[Todo API] Create Success',
  props<{ todo: Todo }>()
);

export const createFailure = createAction(
  '[Todo API] Create Failure',
  props<{ error: unknown }>()
);

export const update = createAction(
  '[Todo Page] Update',
  props<{ todo: TodoUpdateDto }>()
);

export const updateSuccess = createAction(
  '[Todo API] Update Success',
  props<{ todo: Todo }>()
);

export const updateFailure = createAction(
  '[Todo API] Update Failure',
  props<{ error: unknown }>()
);

export const remove = createAction(
  '[Todo Page] Remove',
  props<{ id: string }>()
);

export const removeSuccess = createAction(
  '[Todo API] Remove Success',
  props<{ id: string }>()
);

export const removeFailure = createAction(
  '[Todo API] Remove Failure',
  props<{ error: unknown }>()
);

export const showCreateDialog = createAction('[Todo Page] Show Create Dialog');

export const showEditDialog = createAction(
  '[Todo Page] Show Edit Dialog',
  props<{ todo: Todo }>()
);

export const showRemoveDialog = createAction(
  '[Todo Page] Show Remove Dialog',
  props<{ id: string }>()
);
