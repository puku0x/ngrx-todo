import { Todo } from '../../models';
import {
  State as TodoState,
  featureName,
  initialState,
  adapter
} from '../state';
import * as TodoSelectors from './todo.selector';

interface State {
  [featureName]: TodoState;
}

describe('TodoSelector', () => {
  it('should handle selectors', () => {
    const todos: Todo[] = [
      {
        id: '1',
        text: 'test1',
        checked: true,
        createdAt: 1000000,
        updatedAt: 2000000
      },
      {
        id: '2',
        text: 'test2',
        checked: true,
        createdAt: 1000000,
        updatedAt: 2000000
      },
      {
        id: '3',
        text: 'test3',
        checked: true,
        createdAt: 1000000,
        updatedAt: 2000000
      }
    ];
    const state: State = {
      [featureName]: adapter.addAll(todos, {
        ...initialState,
        loading: true,
        selectedId: '1'
      })
    };
    expect(TodoSelectors.getLoading(state)).toEqual(state.todo.loading);
    expect(TodoSelectors.getError(state)).toEqual(state.todo.error);
    expect(TodoSelectors.getSelectedId(state)).toEqual(state.todo.selectedId);
    expect(TodoSelectors.getTodo(state)).toEqual(todos[0]);
  });
});
