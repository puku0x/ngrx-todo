import { Todo } from '@app/models';
import { State as TodoState, STATE_ID } from '../reducers';
import { todoQuery } from './todo.selector';

interface State {
  [STATE_ID]: TodoState;
}

describe('TodoSelector', () => {
  it('should handle selectors', () => {
    const todos = [
      new Todo('1', 'todo1'),
      new Todo('2', 'todo2'),
      new Todo('3', 'todo3'),
    ];
    const state: State = {
      [STATE_ID]: {
        loading: true,
        ids: ['1', '2', '3'],
        entities: {
          '1': todos[0],
          '2': todos[1],
          '3': todos[2],
        }
      }
    };
    expect(todoQuery.getLoading(state)).toEqual(state.todo.loading);
    expect(todoQuery.getTodos(state)).toEqual(todos);
  });

});
